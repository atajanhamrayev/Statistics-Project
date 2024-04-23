import React, { useState } from "react";
import QuestionContainer from "../Question/QuestionContainer";
import { DeleteTwoTone, PlusOutlined } from "@ant-design/icons";
import { Input, Button, Modal } from "antd";

const Home = (props) => {
  const [isOpenContainer, setIsOpenContainer] = useState(false);
  const [index, setIndex] = useState(null);

  const handleClick = (id) => {
    setIndex(id);
    setIsOpenContainer(!isOpenContainer);
  };
  const deleteResearch = (uuid) => {
    // props.deleteResearch(uuid);
  };

  let newQuestionName = React.createRef();
  let newQuestionBody = React.createRef();

  let onQuestionChange = () => {
    props.updateNewQuestion(
      newQuestionName.current.value,
      newQuestionBody.current.input.value
    );
  };

  let addQuestion = () => {
    props.addQuestion(
      props.questions.length + 1,
      newQuestionName.current.input.value,
      newQuestionBody.current.input.value
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (uuid) => {
    setIsModalOpen(false);
    props.deleteResearch(uuid);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-300 flex flex-col items-center justify-center w-full min-h-[100vh]">
      <div className="w-[80%]">
        <div className="m-[5px] flex items-center flex-wrap justify-around p-[20px] bg-[#a9bbf8] w-full  cursor-pointer gap-[20px] rounded-lg border-solid border-[3px] border-[#442e8d]">
          <div>
            <Input
              placeholder="survey name"
              ref={newQuestionName}
              onChange={onQuestionChange}
              value={props.newQuestion.name}
              prefix={<PlusOutlined />}
            />
          </div>
          <div>
            <Input
              placeholder="question"
              ref={newQuestionBody}
              onChange={onQuestionChange}
              value={props.newQuestion.question}
              prefix={<PlusOutlined />}
            />
          </div>
          <Button onClick={addQuestion}>Submit</Button>
        </div>
        <div className="flex flex-col gap-[5px]">
          {props.questions.map((ques) => {
            return (
              <div key={ques.id}>
                <div className="mx-[5px] flex items-center  justify-between  p-[20px] bg-blue-200 w-full  cursor-pointer gap-[20px] rounded-lg border-solid border-[3px] border-[#a5a29d]">
                  <h1>{ques.name}</h1>{" "}
                  <div className="flex gap-[10px]">
                    {/* <button
                      className="px-2 font-medium border-2 border-[#29809b] w-[40px] h-[40px] hover:bg-[#29809b]  hover:text-white transition-all "
                      onClick={() => deleteResearch(ques.uuid)}
                    >
                      <DeleteTwoTone />
                    </button> */}
                    <Button
                      danger
                      onClick={showModal}
                      className="flex items-center justify-center"
                    >
                      <DeleteTwoTone twoToneColor="red" />
                    </Button>
                    <Modal
                      title="Are you sure to delete this research?"
                      open={isModalOpen}
                      onOk={() => handleOk(ques.uuid)}
                      onCancel={handleCancel}
                    ></Modal>
                    <button onClick={() => handleClick(ques.id)}>
                      {isOpenContainer && index === ques.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="arrow"
                          width="20"
                          height="20"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="arrow"
                          width="20"
                          height="20"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                {isOpenContainer && index === ques.id ? (
                  <QuestionContainer uuid={ques.uuid} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
