import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import { getQuestions, setId } from "./../redux/home-reducer";
import { v4 as uuid } from "uuid";
import { selectChoice, submitResearch } from "./../redux/question-reducer";

export class HomeContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();

    let id = localStorage.getItem("id");
    if (id === null) {
      id = uuid();
      localStorage.setItem("id", id);
    }

    this.props.setId(id);
  }

  render() {
    return <Home {...this.props} questions={this.props.questions} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.homePage.id,
    question: state.questionPage.question,
    questions: state.homePage.questions,
    newQuestion: state.homePage.newQuestion,
    selectedChoice: state.questionPage.selectedChoice,
  };
};

export default connect(mapStateToProps, {
  getQuestions,
  setId,
  selectChoice,
  submitResearch,
})(HomeContainer);
