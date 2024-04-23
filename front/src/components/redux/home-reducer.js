import { questionsAPI } from "./../../api/API";

const SET_QUESTIONS = "SET_QUESTIONS";

const SET_ID = "SET_ID";

let initialState = {
  id: null,
  questions: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS: {
      return { ...state, questions: [...state.questions, action.questions] };
    }
    case SET_ID: {
      return { ...state, id: action.id };
    }

    default:
      return state;
  }
};

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const setId = (id) => ({
  type: SET_ID,
  id,
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
        choices: data.items[i].choices,
      };
      dispatch(setQuestions(question));
    }
  });
};

export default homeReducer;
