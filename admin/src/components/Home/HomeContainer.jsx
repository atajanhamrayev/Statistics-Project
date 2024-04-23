import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import {
  updateNewQuestion,
  getQuestions,
  addQuestion,
  deleteResearch,
} from "./../redux/home-reducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

export class HomeContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return <Home {...this.props} questions={this.props.questions} />;
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.homePage.questions,
    newQuestion: state.homePage.newQuestion,
  };
};

export default compose(
  connect(mapStateToProps, {
    updateNewQuestion,
    getQuestions,
    addQuestion,
    deleteResearch,
  }),
  withAuthRedirect
)(HomeContainer);
