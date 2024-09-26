import React from "react";
interface IPracTiceBox {
  title: string;
  children: React.ReactNode;
}
const PracticeBox: React.FC<IPracTiceBox> = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer px-5 py-3 border rounded-lg shadow-md bg-white">
      {children}
      <p className="mt-3">{title}</p>
    </div>
  );
};

export default PracticeBox;
