import React,{ ReactNode, createContext, useContext, useRef, useState } from "react";

type Props = {
  children: ReactNode,
}

type PopoverContextType = {
  contentRef:React.MutableRefObject<null>, 
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
  const contentRef = useRef(null);

  const togglePopover = ()=>{
    setIsOpen(!isOpen);
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
  if(!isOpen){return null}
  return <div className="absolute top-full left-0 bg-white p-2 rounded-md text-black">{children}</div>;
}
Popover.Action = Action;
Popover.Content = Content;