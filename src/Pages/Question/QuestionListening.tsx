import {faBackward, faForward, faPause} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const QuestionListening = () => {
  return (
    <div className="flex items-center bg-gray-700 text-white p-3 rounded-lg space-x-4 my-[8px]">
      <button className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faBackward}/>
      </button>
      
      <button className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faPause}/>
      </button>
      
      <button className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faForward}/>
      </button>
      
      <span className="text-white text-sm">0:02</span>
      
      <input
        type="range"
        className="mx-2 w-full h-1 bg-gray-400 rounded-lg cursor-pointer"
        defaultValue="20"
        max="100"
      />
      
      {/* Tổng thời gian */}
      <span className="text-white text-sm">0:09</span>
    </div>
  )
}

export default QuestionListening