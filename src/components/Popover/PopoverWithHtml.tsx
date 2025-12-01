// more about native html popover https://web.dev/learn/css/popover-and-dialog
const PopoverWithHtml = () => {
  return (
    <div>
        <button popovertarget="my-popover">Click me</button>
        <div id="my-popover" popover="auto" className="bg-red-200 rounded-sm">My popover content
           
            <br />
            <button popovertarget="my-popover" popovertargetaction="hide" className="bg-blue-300">Hide Popover</button>
        </div>
    </div>
  )
}
export default PopoverWithHtml