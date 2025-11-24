import Toast, { Props as ToastProps } from "./Toast";
import { Position } from "./ToastProvider";


type Props = {
    toasts: ToastProps[],
    position:Position,
    handleRemove: (id: number)=> void,
}
const ToastContainer = ({toasts,position='top-right', handleRemove}:Props) => {
  
  return (
  <div className="toast-container flex flex-col gap-2 fixed" data-position={position}>
    {toasts.map(toast=> <Toast  {...toast} onRemove={toast.onRemove ? handleRemove:undefined} key={toast.id}/>)}
   </div>
  )
}
export default ToastContainer