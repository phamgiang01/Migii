import React from "react";
interface IProgress {
  className?: string;
  width?: string;
}
const Progress: React.FC<IProgress> = ({ className, width = "100%" }) => {
  const styleProgress = {
    backgroundColor: "rgb(226 232 240)",
    height: "5px",
    borderRadius: "8px",
    width: width,
    marginTop: "10px",
  };
  return <span style={styleProgress} className={className}></span>;
};

export default Progress;
