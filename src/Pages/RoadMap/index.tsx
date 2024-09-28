import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import mockDataRoadMap from '../../data/dataRoadMap.json';
import RoadMapItem from "./RoadMapItem.tsx";
import {getColorProcess} from "../../helper";
import Banner from "../../components/Banner.tsx";
import Button from "../../components/Button.tsx";


const Roadmap = () => {
  const listRoadMap = mockDataRoadMap.mockRoadMap;
  const process = 30;
  return (
    <>
      <Banner title='ÔN THI NHÀN HẠ <br/> ĐIỂM CAO VỮNG CHẮC!'/>
      <div className='flex items-center justify-between'>
        <h3 className='my-[60px] text-2xl font-bold'>Tiến trình tập luyện</h3>
        <span>
          <Button>Start</Button>
        </span>
      </div>
      <span className='flex w-[150px] mb-[50px] select-none'>
        <CircularProgressbar value={process} text={`${process}%`} strokeWidth={15} styles={buildStyles({
          textSize: '16px',
          pathTransitionDuration: 0.5,
          textColor: getColorProcess(process),
          pathColor: getColorProcess(process)
        })}/>
      </span>
      <div className='grid grid-cols-3 gap-8 p-2'>
        {listRoadMap.map(item => <RoadMapItem item={item}/>)}
      </div>
    </>
  );
};

export default Roadmap;
