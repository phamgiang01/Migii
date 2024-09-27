import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Progress from "src/components/Progress";
interface ILesson {
  part: number;
  title: string;
  success: number;
  total: number;
  isLock: boolean;
}
const Lesson: React.FC<ILesson> = ({ part, title, success, total, isLock }) => {
  return (
    <div className="my-5 p-5 bg-white rounded-lg">
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
