import React from "react";
interface ITestItem {
  title: string;
  time: number;
  totalPoint: number;
}
const TestItem: React.FC<{ data: ITestItem }> = ({ data }) => {
  return (
    <div className="rounded-xl p-3 m-3 bg-white">
      <h3 className="font-medium text-xl">{data.title}</h3>
      <p>
        <span className="mr-8 text-sm">Thời gian: {data.time}</span>
        <span className="text-sm">Điểm đạt: {data.totalPoint}</span>
      </p>
      <button className="rounded-xl bg-teal-400 py-1 px-2 mt-3">Làm bài</button>
    </div>
  );
};

export default TestItem;
