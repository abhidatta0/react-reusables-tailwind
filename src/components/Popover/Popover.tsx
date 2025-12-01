import React,{ ReactNode, createContext, useContext, useRef, useState } from "react";
import {createPortal} from 'react-dom';

type Props = {
  children: ReactNode,
  onOpen?:()=> void,
  onClose?:()=> void,
}

type PopoverContextType = {
  contentRef:React.MutableRefObject<HTMLDivElement|null>, 
  buttonRef:React.MutableRefObject<HTMLButtonElement|null>,
  isOpen: boolean,
  togglePopover:()=> void,
}
const PopoverContext = createContext<PopoverContextType|null>(null);

const usePopoverContext = ()=>{
  const context = useContext(PopoverContext);
  if(!context){
    throw new Error("usePopoverContext must be used within Popover");
  }
  return context;
}
const Popover = ({children, onClose, onOpen}:Props) => {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const togglePopover = ()=>{
    const newValue = !isOpen;
    setIsOpen(newValue);
    
    if(newValue && contentRef.current && buttonRef.current){
      const {top:bTop, left:bLeft, height:bHeight, bottom: bBottom} = buttonRef.current.getBoundingClientRect();
      const contentPosition = bTop+bHeight;

      console.log({contentPosition,bTop,bBottom,bHeight, wh: window.innerHeight})
      if(contentPosition <= window.innerHeight){
        contentRef.current.style.top = `${bBottom}px`
      }else{
        contentRef.current.style.top = `${bTop-bHeight-10}px`;
      }
      contentRef.current.style.left = `${bLeft}px`;
      onOpen?.()
    }else{
      onClose?.();
    }
  }

  return (
    <PopoverContext.Provider value={{contentRef, buttonRef, isOpen,togglePopover}}>
      <div className="relative overflow-hidden">{children}</div>
    </PopoverContext.Provider>
  )
}
export default Popover;

type ActionProps={
    node: React.ReactNode,
} | {
   label: string
} | {
    children: React.ReactNode,
};
const Action = (props:ActionProps) => {
  const {togglePopover, buttonRef} = usePopoverContext();

  const commonProps = {
    ref:buttonRef,
    onClick: togglePopover,
    className: 'border'
  };

  if('node' in props){
    return <button {...commonProps}>{props.node}</button>
  }
  if('children' in props){
    return <button {...commonProps}>{props.children}</button>
  }
  return (
    <button {...commonProps}>{props.label}</button>
  )
}

type ContentProps = {
  children: ReactNode,
}
const Content = ({children}:ContentProps) => {
  const {isOpen, contentRef} = usePopoverContext();

  const commonClassName = 'absolute top-full left-0 bg-gray-100 p-2 rounded-md text-black';
  let className = commonClassName;
  if(!isOpen){
    className += ' invisible';
  };
  return createPortal(<div ref={contentRef} className={className}>{children}</div>, document.body);
}
Popover.Action = Action;
Popover.Content = Content;