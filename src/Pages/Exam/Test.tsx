import { useParams } from "react-router-dom";
import dataExam from "../..//data/dataExam.json";
import TestItem from "./TestItem";
const Test = () => {
  const tests = dataExam.tests;
  const { id } = useParams();
  return (
    <div>
      <h1 className="font-medium text-2xl text-center my-4">HSK {id}</h1>
      {tests.map((t) => (
        <TestItem data={t} />
      ))}
    </div>
  );
};

export default Test;
