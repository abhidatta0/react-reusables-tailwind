import React,{ ReactNode, createContext, useContext, useRef, useState } from "react";

type Props = {
  children: ReactNode,
}

type PopoverContextType = {
  contentRef:React.MutableRefObject<HTMLDivElement|null>, 
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
const Popover = ({children}:Props) => {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = ()=>{
    const newValue = !isOpen;
    setIsOpen(newValue);
    
    if(newValue && contentRef.current){
      const {top, left, height} = contentRef.current.getBoundingClientRect();
      console.log({top, left, h: window.innerHeight, height});

      const contentPosition = top+height;
      if(contentPosition >= window.innerHeight){
        contentRef.current.style.top = `-${height}px`
      }else{
        contentRef.current.style.top = '100%';
      }
    }
  }

  return (
    <PopoverContext.Provider value={{contentRef, isOpen,togglePopover}}>
      <div className="relative">{children}</div>
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
  const {togglePopover} = usePopoverContext();
  if('node' in props){
    return <button onClick={togglePopover}>{props.node}</button>
  }
  if('children' in props){
    return <button onClick={togglePopover}>{props.children}</button>
  }
  return (
    <button onClick={togglePopover}>{props.label}</button>
  )
}

type ContentProps = {
  children: ReactNode,
}
const Content = ({children}:ContentProps) => {
  const {isOpen, contentRef} = usePopoverContext();

  const commonClassName = 'absolute top-full left-0 bg-white p-2 rounded-md text-black';
  let className = commonClassName;
  if(!isOpen){
    className += ' invisible';
  };
  return <div ref={contentRef} className={className}>{children}</div>;
}
Popover.Action = Action;
Popover.Content = Content;