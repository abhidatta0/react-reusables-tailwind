import { Fragment, useState } from "react";
import Accordion from "./components/Accordion";
import data from "./data";

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="p-3">
      {data.map((qa, index) => (
        <Fragment key={index}>
          <Accordion
            isOpen={selectedIndex === index}
            header={qa.question}
            content={qa.answer}
            onClick={() => setSelectedIndex(index)}
          />
          <div className=" border-t border-[#D9DBE9]"></div>
        </Fragment>
      ))}
    </div>
  );
}

export default App;
