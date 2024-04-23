import React from "react";
import { Toaster } from "react-hot-toast";

const Home = (props) => {
  const handleClick = (choice) => {
    props.selectChoice(choice);
  };
  const Submit = (uuid) => {
    props.submitResearch(props.user_id, uuid, props.selectedChoice.uuid);
  };

  return (
    <div className="bg-blue-300 flex flex-col items-center justify-center w-full min-h-[100vh]">
      <div className="w-[80%]">
        <div className="flex flex-col gap-[5px]">
          {props.questions.map((ques) => {
            return (
              <div key={ques.id}>
                <div className="mx-[5px] flex items-center justify-center  p-[20px] bg-blue-200 w-full  cursor-pointer gap-[20px] rounded-lg border-solid border-[3px] border-[#a5a29d]">
                  <h1 className="text-center">{ques.name}</h1>
                </div>

                {/* <QuestionContainer uuid={ques.uuid} /> */}
                <div className="mx-[5px] mt-[-4px] p-[20px] bg-blue-100 flex flex-col w-full text-black rounded-lg rounded-t-none border-t-0 border-solid border-[3px] border-[#a5a29d]">
                  <div className="text-center">
                    <h1>{ques.question}</h1>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    {ques.choices
                      ? ques.choices.map((choice) => {
                          return (
                            <label>
                              <button
                                className={
                                  `p-2 min-w-[100px] border-solid border-[2px]  border-[#4271c2]  rounded-[10px] ` +
                                  (choice === props.selectedChoice
                                    ? " bg-blue-800 rounded-[10px] text-white"
                                    : "text-[#4271c2]")
                                }
                                onClick={() => handleClick(choice)}
                              >
                                {choice.description}
                              </button>
                              <Toaster
                                position="top-right"
                                reverseOrder={false}
                              />
                            </label>
                          );
                        })
                      : null}
                  </div>

                  <div className="w-full flex h-[30px] mt-[20px]">
                    <button
                      onClick={() => Submit(ques.uuid)}
                      className="w-full text-center bg-blue-800 text-white rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
