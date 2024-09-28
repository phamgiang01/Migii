import {useEffect, useRef, useState} from "react";

import questions from '../../data/dataQuestion.json'
import {IQuestion} from "../../type/common.ts";
import {answers} from "../../helper";
import Button from "../../components/Button.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import QuestionListening from "./QuestionListening.tsx";


const Question = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const listQuestion: IQuestion[] = questions.questions;
  const countdownRef = useRef<HTMLSpanElement | null>(null)
  const [questionSelected, setQuestionSelected] = useState<IQuestion>(listQuestion[0])
  
  useEffect(() => {
    let timer = 3000;
    const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      if (countdownRef.current ) {
        if ("textContent" in countdownRef.current) {
          countdownRef.current.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
      }
      if (timer <= 0) {
        clearInterval(interval);
        if ("textContent" in countdownRef.current) {
          countdownRef.current.textContent = "Time's up!";
        }
      }
      timer--;
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center gap-x-2 text-[24px] font-bold my-[60px]'>
          <h3>Làm bài thi: </h3>
          <span ref={countdownRef}></span>
        </div>
        <span onClick={() => {
          navigate('/')
        }}>
          <Button>
            Thoát
        </Button>
        </span>
      </div>
      <div className='w-[90%] mx-auto'>
        <div className='grid grid-cols-5 gap-8 px-[20px]'>
          {questionSelected.images.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-y-8'>
              <img className='object-cover aspect-square rounded-[12px]' src={item} alt=""/>
              <span className='text-[18px] font-bold'>{answers[index]}.</span>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-y-[60px] mt-[30px]'>
          {listQuestion.map((q, index) => {
            const active = q.id === questionSelected.id;
            return (
              <div
                key={index}
                className={`rounded-[12px] cursor-pointer ${active ? 'bg-amber-100' : 'border-transparent'}`}
                onClick={() => {
                  setQuestionSelected(q)
                }}
              >
                <div className='mb-[40px] rounded-tl-[12px] rounded-tr-[12px] bg-amber-300 px-[16px] py-[8px]'>
                  <span className='text-[16px] font-bold'>Câu {index + 1}: </span>
                  {type === 'listen' ? <QuestionListening/> : <span>{q.content}.</span>}
                </div>
                <div className='flex gap-x-12 px-[20px] py-[12px]'>
                  {
                    answers.map((answer, index) => <span
                      key={index}
                      className='flex w-[45px] h-[45px] border border-black rounded-[50%] items-center justify-center cursor-pointer'>{answer}</span>)
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className='flex justify-center mt-[60px]'>
        <Button>
          Hoàn Thành
        </Button>
      </div>
    </>
  )
}

export default Question