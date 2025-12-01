import Popover from "./Popover"
import PopoverWithHtml from "./PopoverWithHtml"

const Example = () => {
  return (
    <div className="p-10">

      {/* <Popover onOpen={()=> console.log('open')} onClose={()=> console.log('closed')}>
        <Popover.Action>Click me</Popover.Action>
        <Popover.Content>
          Hello There!!!
        </Popover.Content>
      </Popover> */}

      <PopoverWithHtml />

      Outside element
    </div>
  )
}
export default Example