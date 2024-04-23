import { questionsAPI } from "./../../api/API";

const SET_QUESTIONS = "SET_QUESTIONS";
const ADD_QUESTION = "ADD_QUESTION";
const UPDATE_NEW_QUESTION = "UPDATE_NEW_QUESTION";
const DELETE_RESEARCH = "DELETE_RESEARCH";

let initialState = {
  questions: [],
  newQuestion: { name: "", question: "" },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS: {
      return { ...state, questions: [...state.questions, action.questions] };
    }
    case ADD_QUESTION: {
      return {
        ...state,
        newQuestion: { name: "", question: "" },
        questions: [...state.questions, action.question],
      };
    }
    case UPDATE_NEW_QUESTION: {
      return {
        ...state,
        newQuestion: {
          name: action.body.name,
          question: action.body.question,
        },
      };
    }
    case DELETE_RESEARCH: {
      let newQuestions = state.questions.filter(
        (obj) => obj.uuid !== action.uuid
      );
      return { ...state, questions: [...newQuestions] };
    }
    default:
      return state;
  }
};

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const addQuestionAC = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const updateNewQuestion = (name, question) => ({
  type: UPDATE_NEW_QUESTION,
  body: { name, question },
});

export const deleteResearchAC = (uuid) => ({
  type: DELETE_RESEARCH,
  uuid,
});

export const getQuestions = () => (dispatch) => {
  questionsAPI.getAllQuestions().then((data) => {
    let id = 1;
    for (let i = 0; i < data.items.length; i++) {
      let question = {
        id: id++,
        name: data.items[i].name,
        question: data.items[i].question,
        uuid: data.items[i].uuid,
      };
      dispatch(setQuestions(question));
    }
  });
};

export const addQuestion =
  (id, newQuestionName, newQuestionBody) => (dispatch) => {
    questionsAPI.addQuestion(newQuestionName, newQuestionBody).then((data) => {
      alert(data.message);
      let question = {
        id: id,
        name: data.newResearch.name,
        question: data.newResearch.question,
        uuid: data.newResearch.uuid,
      };
      dispatch(addQuestionAC(question));
    });
  };

export const deleteResearch = (uuid) => (dispatch) => {
  questionsAPI.deleteResearch(uuid).then((data) => {
    alert(data.message);
  });
  dispatch(deleteResearchAC(uuid));
};

export default homeReducer;
