import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Form,
  Grid,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import MenuBar from "../../components/MenuBar/MenuBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../context/actions/register";
import { GlobalContext } from "../../context/Provider";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RegistrationForm = () => {
  //history
  const history = useHistory();
  // Add this in your component file
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
  //context
  const {
    authDispatch,
    authState: {
      auth: { loading, data, error },
    },
  } = useContext(GlobalContext);

  //state
  const [fieldErrors, setFieldErrors] = useState({});
  //display divider only in large screens
  const [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth);

  const updateSize = () => {
    setCurrentWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
  });
  //error tracking
  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);
  //proceed to login after registration
  useEffect(() => {
    if (data) {
      history.push("auth/login");
    }
  }, [data]);
  //form validattion
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      surname: "",
      password: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setFieldErrors({});
      // form data for db

      register(values)(authDispatch);
      console.log(values);
    },
  });
  //   console.log(formik);
  return (
    <>
      <MenuBar />
      <Card
        centered
        style={{ width: "800px", height: "600px", padding: "40px" }}
      >
        <Card.Header
          style={{ fontSize: "24px", paddingBottom: "10px", color: "#0095f6" }}
          textAlign="center"
        >
          Authentication
        </Card.Header>
        <Card.Meta textAlign="center">
          Verify your identity and start managing your contacts
        </Card.Meta>
        <Segment
          style={{ height: "550px" }}
          placeholder
          size="small"
          color="blue"
          raised
        >
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form size="small" onSubmit={formik.handleSubmit}>
                <Form.Input
                  style={{
                    color: "#0095f6",
                  }}
                  icon="user"
                  iconPosition="right"
                  label="Username"
                  name="username"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.errors.username && true}
                />

                <Form.Input
                  style={{
                    color: "#0095f6",
                  }}
                  icon="user"
                  iconPosition="right"
                  label="First Name"
                  name="firstname"
                  placeholder="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  error={formik.errors.firstname && true}
                />

                <Form.Input
                  style={{
                    color: "#0095f6",
                  }}
                  icon="user"
                  iconPosition="right"
                  label="Surname"
                  name="surname"
                  placeholder="Surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={formik.errors.surname && true}
                />

                <Form.Input
                  style={{
                    color: "#0095f6",
                  }}
                  icon="mail"
                  type="email"
                  iconPosition="right"
                  label="Email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.errors.email && true}
                />

                <Form.Input
                  style={{
                    color: "#0095f6",
                  }}
                  icon="lock"
                  iconPosition="right"
                  label="Password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.errors.password && true}
                />

                <Button
                  //   disabled={registrationFormValidation}
                  fluid
                  basic
                  loading={loading}
                  color="green"
                  type="submit"
                >
                  <Icon name="signup" />
                  Sign Up
                </Button>
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              {/* <Message>{fieldErrors}</Message> */}
              <Button
                inverted
                as={Link}
                to="/auth/login"
                size="huge"
                color="blue"
              >
                <Icon name="sign-in" />
                Sign In
              </Button>
            </Grid.Column>
          </Grid>
          {currentWindowSize > 768 && <Divider vertical>Or</Divider>}
        </Segment>
      </Card>
    </>
  );
};

export default RegistrationForm;
