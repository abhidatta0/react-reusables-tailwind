import AccordionExample from "./components/Accordion/Example";
import ToastExample from './components/Toast/Example';
import ToastProvider from "./components/Toast/ToastProvider";

function App() {
  return (
    <>
    {/* <AccordionExample /> */}
    <ToastExample />
    <ToastProvider position="bottom-right"/>
    </>
  );
}

export default App;
