import AccordionExample from "./components/Accordion/Example";
import PopoverExample from "./components/Popover/Example";
import ToastExample from './components/Toast/Example';
import ToastProvider from "./components/Toast/ToastProvider";

function App() {
  return (
    <>
    {/* <AccordionExample /> */}
    {/* <ToastExample /> */}
    <PopoverExample />
    <ToastProvider position="bottom-right"/>
    </>
  );
}

export default App;
