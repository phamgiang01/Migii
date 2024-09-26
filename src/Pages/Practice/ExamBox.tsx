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
    marginTop: "10px",
  };
  return (
    <div className="flex flex-col justify-start item-center w-20">
      <div className="flex flex-col justify-center items-center cursor-pointer p-3 border rounded-lg shadow-md bg-white w-20">
        {progress ? (
          <div className="bg-slate-200 rounded-2xl p-2">{children}</div>
        ) : (
          <>{children}</>
        )}
        {progress ? <span style={styleProgress}></span> : <></>}
      </div>
      <p className="mt-1 text-center">{title}</p>
    </div>
  );
};

export default ExamBox;
