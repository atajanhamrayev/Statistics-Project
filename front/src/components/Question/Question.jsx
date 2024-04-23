import React from "react";
import { Toaster } from "react-hot-toast";

import Preloader from "./../common/Preloader";

const Question = (props) => {
  const handleClick = (choice) => {
    props.selectChoice(choice);
  };

  const Submit = () => {
    props.submitResearch(props.user_id, props.uuid, props.selectedChoice.uuid);
  };

  if (!props.question) {
    return <Preloader />;
  }
  return (
    <div className="mx-[5px] mt-[-4px] p-[20px]  flex flex-col w-full rounded-lg rounded-t-none border-t-0 border-solid border-[3px] border-[#a5a29d]">
      <div className="text-center">
        <h1>{props.question}</h1>
      </div>

      <div className="flex flex-col items-center gap-3">
        {props.choices
          ? props.choices.map((choice) => {
              return (
                <label>
                  <button
                    className={
                      `p-2 min-w-[100px] border-solid border-[2px] border-[#4271c2]  rounded-[10px] ` +
                      (choice == props.selectedChoice
                        ? " bg-blue-800 rounded-[10px] text-blue-800"
                        : "text-blue-800")
                    }
                    onClick={() => handleClick(choice)}
                  >
                    {choice.description}
                  </button>
                  <Toaster position="top-right" reverseOrder={false} />
                </label>
              );
            })
          : null}
      </div>

      <div className="w-full flex h-[30px] mt-[20px]">
        <button
          onClick={Submit}
          className="w-full text-center bg-blue-800 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Question;
