import AccordionExample from "./components/Accordion/Example";
import ToastExample from './components/Toast/Example';
import ToastProvider from "./components/Toast/ToastProvider";

function App() {
  return (
    <ToastProvider position="bottom-right">
    {/* <AccordionExample /> */}
    <ToastExample />
    </ToastProvider>
  );
}

export default App;
