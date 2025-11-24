import { useToastContext } from "./ToastProvider";

const Example = () => {

  const {addNotification} = useToastContext();
  const toggleToast = ()=>{
    addNotification({title:'Hello'+new Date().getTime(),cta: null,
      onRemove:()=> console.log(1)
    })
  }
  return (
    <div>
        <button onClick={()=> toggleToast()}>Success Toast</button>
        <button>Warning Toast</button>
        <button>Info Toast</button>
        <button>Error Toast</button>
    </div>
  )
}
export default Example