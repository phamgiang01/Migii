
import {useState} from "react";
import data from '../../data/data.json'

import PracticeBox from "./PracticeBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHeadphones,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import ExamBox from "./ExamBox";
import Banner from "../../components/Banner.tsx";
import BannerPractice from "./BannerPractice.tsx";



const Index = () => {
  const listBox = data.practiceBox;
  const listExam = data.practiceExam;
  const listPropose = data.practicePropose;
  const iconMapping = {
    faHeadphones: faHeadphones,
    faBookOpen: faBookOpen,
    faPencil: faPencil,
  };
  
  const [historyActive, setHistoryActive] = useState(false);
  return (
    <div id="practice">
      <Banner title='ÔN THI NHẸ NHÀNG <br/> ĐIỂM CAO DỄ DÀNG'/>
      
      <BannerPractice/>
      <div className="practice pt-5">
        <h2 className="font-medium">Luyện tập</h2>
        <div className="list-practice-box flex flex-wrap justify-around gap-3 mt-5">
          {listBox.map((box) => {
              return (
                <PracticeBox title={box.title} key={box.title}>
                  <FontAwesomeIcon
                    icon={iconMapping[box.icon]}
                    color={box.color}
                    className='text-3xl'
                  />
                </PracticeBox>
              )
            }
          )}
        </div>
      </div>
      <div className="exam mt-10">
        <h2 className="font-medium">Luyện thi</h2>
        <div className="list-exam-box flex flex-wrap justify-around mt-5 gap-2">
          {listExam.map((box) => (
            <ExamBox title={box.title} key={box.title}>
              <FontAwesomeIcon
                icon={iconMapping[box.icon]}
                className={`text-2xl text-teal-500`}
              />
            </ExamBox>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-medium">Đề xuất luyện tập</h2>
        <div className="list-exam-box flex flex-wrap justify-around mt-5 gap-2">
          {listPropose.map((box) => (
            <ExamBox title={box.title} key={box.title} progress={true}>
              <FontAwesomeIcon
                icon={iconMapping[box.icon]}
                className={`text-lg text-slate-400`}
              />
            </ExamBox>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h2 className="font-medium">Lịch sử</h2>
        <div className="toggle-history mt-5">
          <span
            className={`history-practice rounded-2xl px-3 py-1 cursor-pointer ${
              historyActive ? "" : "bg-teal-500"
            }`}
            onClick={() => setHistoryActive(false)}
          >
            Luyện tập
          </span>
          <span
            className={`history-exam rounded-2xl px-5 py-1 cursor-pointer ${
              historyActive ? "bg-teal-500" : ""
            }`}
            onClick={() => setHistoryActive(true)}
          >
            Thi
          </span>
        </div>
        <div className="mt-10 text-center">
          Bạn chưa làm bài {historyActive ? "thi" : "luyện tập"} nào
        </div>
      </div>
    </div>
  );
};

export default Index;
