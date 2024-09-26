import {IRoadMap} from "../../type/common.ts";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {getColorProcess} from "../../helper";

interface IProps {
  item: IRoadMap
}

const RoadMapItem = ({item}: IProps) => {
  const process = item.process ?? 0
  return (
    <div className='w-full relative px-6 py-2 rounded-[16px] bg-white min-h-[80px] cursor-pointer'>
      <span
        className={`absolute top-0 left-0 w-[30%] rounded-br-[16px] rounded-tl-[16px] flex items-center justify-center text-[14px] text-white py-[2px] font-mono ${item.isSpecial ? 'bg-amber-600' : 'bg-blue-600'} `}
      >
        {item.examDay}
      </span>
      <span className='flex w-[50px] select-none absolute top-[50%] translate-y-[-50%] right-3'>
        <CircularProgressbar value={process} text={`${process}%`} strokeWidth={15} styles={buildStyles({
          textSize: '28px',
          pathTransitionDuration: 0.5,
          textColor: getColorProcess(process),
          pathColor: getColorProcess(process)
        })}/>
      </span>
      <div className='mt-[25px] flex flex-col'>
        <span className='text-[16px]'>{item.title}</span>
        <span className='text-[14px] font-bold'>{item.target}</span>
      </div>
    </div>
  )
  
}

export default RoadMapItem