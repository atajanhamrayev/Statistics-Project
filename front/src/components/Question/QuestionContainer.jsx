import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import {
  selectChoice,
  getQuestion,
  submitResearch,
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
  user_id: state.homePage.id,
  name: state.questionPage.name,
  question: state.questionPage.question,
  choices: state.questionPage.choices,
  selectedChoice: state.questionPage.selectedChoice,
});

export default connect(mapStateToProps, {
  getQuestion,
  selectChoice,
  submitResearch,
})(QuestionContainer);
