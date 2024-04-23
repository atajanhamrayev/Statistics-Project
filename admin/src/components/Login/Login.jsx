import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { login } from "./../redux/auth-reducer";

const Login = (props) => {
  const onFinish = (values) => {
    props.login(values.username, values.password);
    console.log("Success:", values);
  };
  if (props.isAuth === true) return <Navigate to="/" />;
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center w-full min-h-[100vh]">
      <div className="px-12 py-3 mx-auto flex items-center justify-center border-solid border-blue-400 bg-blue-200 rounded-lg ">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <h1 className="font-bold text-2xl text-center">LOGIN</h1>
          <Form.Item
            label="Username"
            name="username"
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
                error: "Your username is wrong!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
                error: "Your password is wrong!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

class LoginContainer extends Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  message: state.auth.message,
});

export default connect(mapStateToProps, { login })(LoginContainer);
