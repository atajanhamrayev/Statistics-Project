import { questionsAPI } from "./../../api/API";

const SET_QUESTION = "SET_QUESTION";
const SET_CHOICES = "SET_CHOICES";
const UPDATE_NEW_CHOICE_BODY = "UPDATE_NEW_CHOICE_BODY";
const ADD_CHOICE = "ADD_CHOICE";
const DELETE_CHOICE = "DELETE_CHOICE";

let initialState = {
  uuid: null,
  name: null,
  question: null,
  choices: [],
  newChoiceBody: "",
  total_count: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION: {
      let total_count = 0;
      for (let i = 0; i < action.question.choices.length; i++) {
        total_count += action.question.choices[i].frequency;
      }

      return { ...state, ...action.question, total_count };
    }
    case SET_CHOICES: {
      return { ...state, choices: [...action.choices] };
    }
    case UPDATE_NEW_CHOICE_BODY: {
      return { ...state, newChoiceBody: action.choiceBody };
    }
    case ADD_CHOICE: {
      return {
        ...state,
        newChoiceBody: "",
        choices: [...action.choice],
      };
    }
    case DELETE_CHOICE: {
      let filteredChoices = state.choices.filter(
        (obj) => obj.uuid !== action.choice_uuid
      );
      return { ...state, choices: [...filteredChoices] };
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

export const updateNewChoiceBody = (choiceBody) => ({
  type: UPDATE_NEW_CHOICE_BODY,
  choiceBody,
});

export const addChoiceReducer = (choice) => ({
  type: ADD_CHOICE,
  choice,
});

export const deleteChoiceAC = (choice_uuid) => ({
  type: DELETE_CHOICE,
  choice_uuid,
});

export const getQuestion = (uuid) => (dispatch) => {
  questionsAPI.getOneQuestion(uuid).then((data) => {
    let question = {
      uuid: data.uuid,
      name: data.name,
      question: data.question,
      choices: [...data.choices],
      IQR: data.IQR,
      lower: data.lower,
      upper: data.upper,
      mean: data.mean,
      median: data.median,
      standardDeviation: data.standardDeviation,
      varriance: data.varriance,
      description: data.description,
    };
    dispatch(setQuestion(question));
  });
};

export const addChoice = (uuid, newChoiceBody) => (dispatch) => {
  questionsAPI.addChoice(uuid, newChoiceBody).then((data) => {
    dispatch(addChoiceReducer(data.newItem.choices));
  });
};

export const deleteChoice = (res_uuid, choice_uuid) => (dispatch) => {
  questionsAPI.deleteChoice(res_uuid, choice_uuid);
  dispatch(deleteChoiceAC(choice_uuid));
};

export default questionReducer;
