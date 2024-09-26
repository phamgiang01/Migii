import React from "react";
interface IPracTiceBox {
  title: string;
  children: React.ReactNode;
}
const PracticeBox: React.FC<IPracTiceBox> = ({ children, title }) => {
  const styleProgress = {
    backgroundColor: "white",
    height: "5px",
    borderRadius: "8px",
    width: "100%",
    marginTop: "10px",
  };
  return (
    <div className="flex flex-col justify-start item-center w-30 px-5 py-3 border rounded-lg shadow-md bg-white">
      <div className="flex flex-col justify-center items-center cursor-pointer p-3 border rounded-lg shadow-md bg-cyan-100 w-20">
        {children}
        <span style={styleProgress}></span>
      </div>
      <p className="mt-3 text-center">{title}</p>
    </div>
  );
};

export default PracticeBox;
