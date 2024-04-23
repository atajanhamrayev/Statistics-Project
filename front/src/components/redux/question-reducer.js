import { questionsAPI } from "./../../api/API";
import toast from "react-hot-toast";

const SET_QUESTION = "SET_QUESTION";
const SET_CHOICES = "SET_CHOICES";
const SELECTED_CHOICE = "SELECTED_CHOICE";

let initialState = {
  uuid: null,
  name: null,
  question: null,
  choices: [],
  selectedChoice: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION: {
      return { ...state, ...action.question };
    }
    case SET_CHOICES: {
      return { ...state, choices: [...action.choices] };
    }
    case SELECTED_CHOICE: {
      return { ...state, selectedChoice: action.choice };
    }
    default:
      return state;
  }
};

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const setChoices = (choices) => ({
  type: SET_CHOICES,
  choices,
});

export const selectChoice = (choice) => ({
  type: SELECTED_CHOICE,
  choice,
});

export const getQuestion = (uuid) => (dispatch) => {
  questionsAPI.getOneQuestion(uuid).then((data) => {
    let question = {
      uuid: data.uuid,
      name: data.name,
      question: data.question,
      choices: [...data.choices],
    };
    dispatch(setQuestion(question));
  });
};

export const submitResearch =
  (user_uuid, res_uuid, choice_uuid) => (dispatch) => {
    questionsAPI
      .submitResearch(user_uuid, res_uuid, choice_uuid)
      .then((data) => toast.success("Thanks for voting!"))
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

export default questionReducer;
