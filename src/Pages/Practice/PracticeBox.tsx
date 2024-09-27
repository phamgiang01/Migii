import React from "react";
import Progress from "src/components/Progress";
import { EPractice } from "src/type/practice";
interface IPracTiceBox {
  title: string;
  children: React.ReactNode;
  active: boolean;
  type: EPractice;
  onClick: (type: EPractice) => void;
}
const PracticeBox: React.FC<IPracTiceBox> = ({
  children,
  title,
  active,
  type,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col justify-start item-center w-30 px-5 py-3 border rounded-lg shadow-md bg-white cursor-pointer ${
        active ? "scale-125" : ""
      }`}
      onClick={() => onClick(type)}
    >
      <div className="flex flex-col justify-center items-center p-3 border rounded-lg shadow-md bg-cyan-100 w-20">
        {children}
        <Progress />
      </div>
      <p className="mt-3 text-center">{title}</p>
    </div>
  );
};

export default PracticeBox;
