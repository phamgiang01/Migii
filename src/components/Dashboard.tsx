import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import data from "../data/dataPractice.json";
import {faBookOpen, faHeadphones, faPencil,} from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import BannerPractice from "../Pages/Practice/BannerPractice.tsx";
import ExamBox from "../Pages/Practice/ExamBox.tsx";

const Dashboard = () => {
  const listExam = data.practiceExam;
  const listPropose = data.practicePropose;
  const iconMapping = {
    faHeadphones: faHeadphones,
    faBookOpen: faBookOpen,
    faPencil: faPencil,
  };
  
  return (
    <div id="practice">
      <Banner title="ÔN THI NHẸ NHÀNG <br/> ĐIỂM CAO DỄ DÀNG" />
      <BannerPractice />
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
      
    </div>
  );
};

export default Dashboard;
