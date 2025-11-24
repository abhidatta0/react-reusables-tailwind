import { useState } from "react"
import Toast from "./Toast"

const Example = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = ()=>{
    setShowToast(!showToast);
  }
  return (
    <div>

        <Toast show={showToast} title="Hello"  cta={null} id={1} type="danger" />
        <button onClick={()=> toggleToast()}>Success Toast</button>
        <button>Warning Toast</button>
        <button>Info Toast</button>
        <button>Error Toast</button>
    </div>
  )
}
export default Example