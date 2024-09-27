import React from "react";
import Progress from "src/components/Progress";
interface IExamBox {
  title: string;
  children: React.ReactNode;
  progress?: boolean;
}
const ExamBox: React.FC<IExamBox> = ({ children, title, progress = false }) => {
  return (
    <div className="flex flex-col justify-start item-center w-20">
      <div className="flex flex-col justify-center items-center cursor-pointer p-3 border rounded-lg shadow-md bg-white w-20">
        {progress ? (
          <div className="bg-slate-200 rounded-2xl p-2">{children}</div>
        ) : (
          <>{children}</>
        )}
        {progress ? <Progress /> : <></>}
      </div>
      <p className="mt-1 text-center">{title}</p>
    </div>
  );
};

export default ExamBox;
