import {  useCallback, useState, useEffect } from "react"
import { ParamsFromComp } from "./Toast";
import ToastContainer from "./ToastContainer";
import ToastService,{sendToast} from "./ToastService";

export type Position = 'top-right'|'top-left'|"bottom-right"|'bottom-left';
export type AddNotificationParam = Omit<ParamsFromComp,'id'>;

type Props = {
  position?: Position,
}
const ToastProvider = ({position = 'top-right'}:Props) => {

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
      <ToastContainer toasts={toasts} handleRemove={handleRemove} position={position}/>
    </>
  )
}
export default ToastProvider;

export { sendToast };