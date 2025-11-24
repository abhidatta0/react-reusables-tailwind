import { createContext, ReactNode, useCallback, useState,useContext } from "react"
import { Props as ToastProps } from "./Toast";
import ToastContainer from "./ToastContainer";

export type Position = 'top-right'|'top-left'|"bottom-right"|'bottom-left';

type ToastContextType = {
  addNotification:(params: Omit<ToastProps,'id'>) => void
}
const ToastContext = createContext<ToastContextType|null>(null);

type Props = {
    children: ReactNode;
    position?: Position,
}
const ToastProvider = ({children,position = 'top-right'}:Props) => {

  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // remove toast by id from list
  const handleRemove = (id: number)=>{
    setToasts([...toasts].filter(toast => toast.id !== id));
  }

  const addNotification = useCallback(({title, description, type, cta,onRemove}:Omit<ToastProps,'id'>)=>{
    const id = new Date().getTime();
    const obj = {title, description, type, cta, id,onRemove};
    setToasts(prev=> ([obj,...prev]))
  },[]);
  return (
    <>
    <ToastContext.Provider value={{addNotification}}>
   {children}
   </ToastContext.Provider>
   <ToastContainer toasts={toasts} handleRemove={handleRemove} position={position}/>
   </>
  )
}
export default ToastProvider;

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error(
      "useToastContext has to be used within <ToastProvider>"
    );
  }

  return toastContext;
};