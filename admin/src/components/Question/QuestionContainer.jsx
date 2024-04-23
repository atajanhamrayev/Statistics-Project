import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import {
  updateNewChoiceBody,
  getQuestion,
  addChoice,
  deleteChoice,
} from "./../redux/question-reducer";

class QuestionContainer extends Component {
  componentDidMount() {
    this.props.getQuestion(this.props.uuid);
  }

  render() {
    return <Question {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  name: state.questionPage.name,
  question: state.questionPage.question,
  choices: state.questionPage.choices,
  newChoiceBody: state.questionPage.newChoiceBody,
  total_count: state.questionPage.total_count,
  IQR: state.questionPage.IQR,
  lower: state.questionPage.lower,
  upper: state.questionPage.upper,
  mean: state.questionPage.mean,
  median: state.questionPage.median,
  standardDeviation: state.questionPage.standardDeviation,
  varriance: state.questionPage.varriance,
  description: state.questionPage.description,
});

export default connect(mapStateToProps, {
  updateNewChoiceBody,
  getQuestion,
  addChoice,
  deleteChoice,
})(QuestionContainer);
