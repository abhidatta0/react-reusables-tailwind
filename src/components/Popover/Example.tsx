import Popover from "./Popover"

const Example = () => {
  return (
    <div className="p-10">

      <Popover>
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