import data from "src/data/data.json";
import PracticeBox from "./PracticeBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHeadphones,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import ExamBox from "./ExamBox";
const Index = () => {
  const listBox = data.practiceBox;
  const listExam = data.practiceExam;

  const iconMapping = {
    faHeadphones: faHeadphones,
    faBookOpen: faBookOpen,
    faPencil: faPencil,
    // Thêm các biểu tượng khác nếu cần
  };
  return (
    <div id="practice">
      <div className="practice pt-5">
        <h2 className="font-medium">Luyện tập</h2>
        <div className="list-practice-box flex justify-around">
          {listBox.map((box) => (
            <PracticeBox title={box.title} key={box.title}>
              <FontAwesomeIcon
                icon={iconMapping[box.icon]}
                className={`text-3xl ${box.color}`}
              />
            </PracticeBox>
          ))}
        </div>
      </div>
      <div className="exam mt-10">
        <h2 className="font-medium">Luyện thi</h2>
        <div className="list-exam-box flex justify-around mt-5">
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
        <div className="list-exam-box flex justify-around mt-5">
          {listExam.map((box) => (
            <ExamBox title={box.title} key={box.title} progress={true}>
              <FontAwesomeIcon
                icon={iconMapping[box.icon]}
                className={`text-2xl text-teal-500`}
              />
            </ExamBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
