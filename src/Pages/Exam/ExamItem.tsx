import React from "react";
import hsk_target from "../../assets/hsk_target.png";
import { Link } from "react-router-dom";
interface IExamItem {
  title: string;
  description: string;
  quantity: number;
  id: number;
}
const ExamItem: React.FC<{ data: IExamItem }> = ({ data }) => {
  return (
    <Link
      to={`/exam/test/${data.id}`}
      className="rounded-lg flex items-center justify-between bg-white p-5 mt-4 cursor-pointer"
    >
      <div className="flex gap-4">
        <img
          src={hsk_target as string}
          alt=""
          className="rounded-full w-12 bg-slate-200"
        />
        <div className="content">
          <h6 className="text-lg font-medium">{data.title}</h6>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="circle w-14 h-14 rounded-full bg-teal-400 flex items-center justify-center">
        {data.quantity} Đề
      </div>
    </Link>
  );
};

export default ExamItem;
