import { createContext, ReactNode, useCallback, useState,useContext, useEffect } from "react"
import { ParamsFromComp } from "./Toast";
import ToastContainer from "./ToastContainer";
import ToastService from "./ToastService";

export type Position = 'top-right'|'top-left'|"bottom-right"|'bottom-left';
export type AddNotificationParam = Omit<ParamsFromComp,'id'>;

type ToastContextType = {
  addNotification:(params: AddNotificationParam) => void
}
const ToastContext = createContext<ToastContextType|null>(null);

type Props = {
    children: ReactNode;
    position?: Position,
}
const ToastProvider = ({children,position = 'top-right'}:Props) => {

  const [toasts, setToasts] = useState<ParamsFromComp[]>([]);

  // remove toast by id from list
  const handleRemove = (id: number)=>{
    setToasts([...toasts].filter(toast => toast.id !== id));
  }

  const addNotification = useCallback((params:AddNotificationParam)=>{
    const id = new Date().getTime();
    const obj = {...params, id};
    setToasts(prev=> ([obj,...prev]))
  },[]);

  useEffect(()=>{
    ToastService.registerNotification(addNotification);
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