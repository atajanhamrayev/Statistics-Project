import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });

  let RedirectComponentwithAuth = connect(mapStateToProps)(RedirectComponent);
  return RedirectComponentwithAuth;
};
