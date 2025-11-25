import { useToastContext } from "./ToastProvider";
import ToastService from "./ToastService";

const Example = () => {

  const {addNotification} = useToastContext();
  const infoToast = ()=>{
    addNotification({title:'Hello'+new Date().getTime(),cta: null})
  }

  const sendToast = ()=>{
    ToastService.sendToast({title:'Sucess: Yay!', type:'success'});
  }

  const sendErrorToast = ()=>{
    ToastService.sendToast({title:'Danger ahead!', type:'danger', duration: 10000, canRemove:true});
  }
  return (
    <div>
        <button onClick={()=> sendToast()}>Success Toast</button>
        <br />
        <button  onClick={infoToast}>Info Toast</button>
        <br />
        <button onClick={sendErrorToast}>Error Toast</button>
    </div>
  )
}
export default Example