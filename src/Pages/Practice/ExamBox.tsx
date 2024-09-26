import React from "react";
interface IExamBox {
  title: string;
  children: React.ReactNode;
  progress: boolean;
}
const ExamBox: React.FC<IExamBox> = ({ children, title, progress = false }) => {
  const styleProgress = {
    backgroundColor: "rgb(226 232 240)",
    height: "5px",
    borderRadius: "8px",
    width: "100%",
  };
  return (
    <div className="flex flex-col justify-center item-center">
      <div className="flex flex-col justify-center items-center cursor-pointer p-3 border rounded-lg shadow-md bg-white">
        {children}
        {progress ? <span style={styleProgress}></span> : <></>}
      </div>
      <span className="mt-1">{title}</span>
    </div>
  );
};

export default ExamBox;
