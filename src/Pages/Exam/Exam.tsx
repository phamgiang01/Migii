import dataExam from "../..//data/dataExam.json";
import ExamItem from "./ExamItem";
const Exam = () => {
  const data = dataExam.examBox;
  return (
    <div className="p-4">
      <h1 className="title text-center text-2xl font-medium">Thi</h1>
      {data.map((d) => (
        <ExamItem data={d} />
      ))}
    </div>
  );
};

export default Exam;
