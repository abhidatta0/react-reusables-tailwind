import { Plus, Minus } from "lucide-react";
import classNames from "classnames";
import { useRef } from "react";

type Props = {
  header: string;
  isOpen: boolean;
  content: string;
  onClick: () => void;
};
const Accordion = ({ header, content, isOpen, onClick }: Props) => {
  const IconComp = isOpen ? Minus : Plus;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="my-4">
      <div
        onClick={onClick}
        className={classNames(
          "flex items-center justify-between pb-1 text-black	hover:text-sky-400 cursor-pointer",
          { "text-sky-400": isOpen }
        )}
      >
        <p className="font-bold">{header}</p>
        <IconComp size={20} />
      </div>

      <div
        className={classNames("overflow-y-hidden transition-all")}
        style={{ height: isOpen ? ref.current?.scrollHeight || 0 : 0 }}
        ref={ref}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
