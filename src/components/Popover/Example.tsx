import Popover from "./Popover"

const Example = () => {
  return (
    <div className="p-10">

      <Popover onOpen={()=> console.log('open')} onClose={()=> console.log('closed')}>
        <Popover.Action>Click me</Popover.Action>
        <Popover.Content>
          Hello There!!!
        </Popover.Content>
      </Popover>

      Outside element
    </div>
  )
}
export default Example