import { ReactNode } from "react"
import { BadgeCheck,LucideIcon, CircleAlert , BadgeInfo} from 'lucide-react';

type ToastType = 'info'|'danger'|"success";


const Icon:Record<ToastType,LucideIcon> = {
  'danger':CircleAlert,
  "info":BadgeInfo,
  'success':BadgeCheck,
};

const IconColor:Record<ToastType,string> = {
  'danger':'text-red-500',
  "info":'text-blue-500',
  'success':'text-green-500',
};

const borderColor:Record<ToastType,string> = {
  'danger':'border-red-500',
  "info":'border-blue-500',
  'success':'border-green-500',
};

const progressColor:Record<ToastType,string> = {
  'danger':'bg-red-500',
  "info":'bg-blue-500',
  'success':'bg-green-500',
};


export type Props = {
  id: number,
  title: string,
  description?:string,
  onRemove?:(id: number)=> void,
  cta?:ReactNode,
  type?:ToastType,
};

const Toast = ({title,description,cta,onRemove, type = 'info',id}:Props) => {
  const handleRemove = ()=>{
    onRemove?.(id);
  }

  const TypeIcon = Icon[type];
  const TypeIconColor = IconColor[type];


  return (
      <div className={`relative  toast w-[400px] border ${borderColor[type]} rounded-lg overflow-hidden`}>
        {onRemove && <button onClick={handleRemove} className="absolute right-2 top-1 bg-transparent">&times;</button>}
        <div className="flex items-center gap-3 p-3">
          <div className="flex items-center gap-2 flex-1 ">
             <TypeIcon className={TypeIconColor} size={20}/>
             <div className="flex flex-col text-left flex-1 gap-1">
              <span>{title}</span>
              {description && <span>{description}</span>}
             </div>
          </div>
          {cta && <div className="max-w-[24px] max-h-[24px] bg-red-300 overflow-hidden">
             {cta}
          </div>}
        </div>
        <div className={`h-1 w-full absolute bottom-0 left-0 ${progressColor[type]} border-l-0 border-r-0`}></div>
      </div>
  )
}
export default Toast