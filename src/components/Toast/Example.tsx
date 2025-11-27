import {sendToast} from "./ToastProvider";

const Example = () => {

  const infoToast = ()=>{
    sendToast({title:'Hello'+new Date().getTime(),cta: null})
  }

  const successToast = ()=>{
    sendToast({title:'Sucess: Yay!', type:'success'});
  }

  const sendErrorToast = ()=>{
    sendToast({title:'Danger ahead!', type:'danger', duration: 10000, canRemove:true});
  }
  return (
    <div>
        <button onClick={successToast}>Success Toast</button>
        <br />
        <button  onClick={infoToast}>Info Toast</button>
        <br />
        <button onClick={sendErrorToast}>Error Toast</button>
    </div>
  )
}
export default Example