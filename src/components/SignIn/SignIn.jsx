import { Button, Checkbox, Col, Form, Input, Row, message } from "antd";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Password from "antd/es/input/Password";

const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inCorrectPassword, setInCorrectPassword] = useState(false);

  const onFinish = (values) => {
    // if (form.getFieldValue("password") === "1234") {
    //   setIsAuthenticated(true);
    //   console.log("Success:", values);
    navigate("/form");
    message.success("Registration Successfull");
    // } else {
    //   setInCorrectPassword(true);
    //   message.error("Incorrect Password");
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSignUp = () => {
    // if (isAuthenticated) {
    //   navigate("/otp");
    // }
    // navigate("/otp");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true, countryCode: "+91" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <p className="form-title">Register Now</p>

          {/* <p className="form-title">Welcome back</p> */}
          {/* <p>Login to the Dashboard</p> */}
          <Form.Item
            name="firstname"
            style={{ marginTop: "15px" }}
            rules={[
              {
                required: true,
                message: "Please enter valid first name - Space not allowed",
                // pattern: new RegExp(/[^\s]+\s*$/i),
                pattern: new RegExp(/^[A-Za-z]+$/),
              },
            ]}
          >
            <Input
              style={{
                height: "40px",
              }}
              placeholder="Enter First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please enter valid last name - Space not allowed",
                // pattern: new RegExp(/[^\s]+\s*$/i),
                pattern: new RegExp(/^[A-Za-z]+$/),
              },
            ]}
          >
            <Input
              style={{
                height: "40px",
              }}
              placeholder="Enter Last Name"
            />
          </Form.Item>
          <label style={{ fontWeight: "bold" }}>
            <span style={{ color: "#FE6668", fontWeight: 100 }}> *</span> Phone
            Number
          </label>
          <Row gutter={[16, 16]}>
            <Col xxl={3} xl={5} lg={5} md={6} sm={5} xs={4}>
              <Form.Item name="countryCode">
                <Input
                  type="text"
                  value="+91"
                  disabled
                  placeholder="Enter Country Code"
                  // maxLength={3}
                  // minLength={2}
                />
              </Form.Item>
            </Col>
            <Col xxl={21} xl={19} lg={19} md={18} sm={19} xs={20}>
              <Form.Item
                name={"phoneNumber"}
                // rules={[
                //   {
                //     validator: (rule, value) => {
                //       if (value && value.replace(/[^0-9]/g, "").length !== 10) {
                //         return Promise.reject(
                //           "Please enter a 10-digit phone number"
                //         );
                //       }
                //       return Promise.resolve();
                //     },
                //   },
                // ]}
                rules={[
                  {
                    validator: (rule, value) => {
                      // Remove non-numeric characters
                      const numericValue = value.replace(/[^0-9]/g, "");

                      // Check if the numericValue is 10 digits long and starts with 6, 7, 8, or 9
                      if (
                        numericValue.length !== 10 ||
                        !/^[6-9]\d{9}$/.test(numericValue)
                      ) {
                        return Promise.reject(
                          "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9."
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  placeholder="Phone Number"
                  minLength={10}
                  maxLength={10}
                  autoComplete="off"
                  type="tel"
                  onKeyPress={(event) => {
                    if (event.charCode < 48 || event.charCode > 57) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          {/* <Form.Item
            name={"phoneNumber"}
            rules={[
              {
                validator: (rule, value) => {
                  if (value && value.replace(/[^0-9]/g, "").length !== 10) {
                    return Promise.reject(
                      "Please enter a 10-digit phone number"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              style={{
                height: "40px",
              }}
              placeholder="Enter Phone Number"
            />
          </Form.Item> */}

          {/* <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please enter email",
              },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter valid email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item> */}

          {/* <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              style={{
                height: "40px",
              }}
              placeholder="Enter Password"
            />
          </Form.Item> */}

          {/* <Form.Item name="remember" valuePropName="checked">
            <Link to={"/forgotpassword"}>Forgot password</Link>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSignUp}
            >
              SEND OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    // <h1>Hello world</h1>
  );
};

export default SignIn;
