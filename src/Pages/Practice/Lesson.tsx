import {faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Progress from "../../components/Progress.tsx";
import {useNavigate} from "react-router-dom";
import React from "react";

interface ILesson {
  part: number;
  title: string;
  success: number;
  total: number;
  isLock: boolean;
  isListening?: boolean
}
const Lesson: React.FC<ILesson> = ({ part, title, success, total, isLock,isListening }) => {
  const navigate = useNavigate();
  return (
    <div className="my-5 p-5 bg-white rounded-lg" onClick={() => {
      navigate(isListening ? '/question?type=listen' : '/question')
    }}>
      <h5 className="text-xl font-medium">
        Part {part} - {title}
      </h5>
      <div className="flex items-center justify-between">
        <div className="content flex items-center gap-3">
          <p>Trả lời đúng:</p>
          <h6 className="text-lg font-medium">
            {success}-{total}
          </h6>
        </div>
        {isLock ? (
          <FontAwesomeIcon icon={faLock} className="text-teal-400" />
        ) : (
          <></>
        )}
      </div>
      <div className="flex gap-4">
        <p className="">Hoàn thành</p>
        <Progress className="flex-1" />
      </div>
    </div>
  );
};

export default Lesson;
