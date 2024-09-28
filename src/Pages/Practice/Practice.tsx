import {
  faBookOpen,
  faHeadphones,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import data from "../../data/dataPractice.json";
import PracticeBox from "./PracticeBox";
import Lesson from "./Lesson";
import {EPractice} from "../../type/practice.ts";
const PracticeDetail = () => {
  const listBox = data.practiceBox;

  const [practiceActive, setPracticeActive] = useState(EPractice.LISTEN);

  const dataPractice = data.practiceDetail[practiceActive];

  const iconMapping = {
    faHeadphones: faHeadphones,
    faBookOpen: faBookOpen,
    faPencil: faPencil,
  };
  return (
    <div className="mx-5 md:mx-20">
      <div className="practice">
        <h2 className="font-medium text-3xl text-center">Luyện tập</h2>
        <div className="list-practice-box flex flex-wrap justify-around gap-8 mt-7 md:gap-4">
          {listBox.map((box) => {
            return (
              <PracticeBox
                title={box.title}
                key={box.title}
                active={box.type == practiceActive}
                type={box.type}
                onClick={(type) => setPracticeActive(type as EPractice )}
              >
                <FontAwesomeIcon
                  icon={iconMapping[box.icon]}
                  color={box.color}
                  className="text-3xl"
                />
              </PracticeBox>
            );
          })}
        </div>
      </div>
      <div className="result-practice mt-10">
        <h6 className="font-medium text-xl">
          Số câu đã làm: {dataPractice.totalCompleted}
        </h6>
        <h6 className="font-medium text-xl">
          Trả lời đúng: {dataPractice.totalSuccess}
        </h6>
      </div>
      <div className="lesson">
        {dataPractice.lesson.map((l, index) => (
          <Lesson
            key={index}
            part={index + 1}
            title={l.title}
            success={l.success}
            total={l.total}
            isLock={l.isLock}
            isListening={practiceActive === EPractice.LISTEN}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeDetail;
