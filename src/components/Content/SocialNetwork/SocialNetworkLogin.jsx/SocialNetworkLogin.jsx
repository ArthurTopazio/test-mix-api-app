import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from "react-redux"
import { login } from "./../../../redux/auth-reducer"
import { Navigate } from "react-router-dom"

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('We cant use that name'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .required('impossible to use'),
});

const LoginForm = (props) => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={SignupSchema}

        onSubmit={(values, submitProps) => {
          props.login(values.email, values.password, values.rememberMe)
          submitProps.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" placeholder='email' />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <div>
              <Field name="rememberMe" type='checkbox' />
              <p>Remember me</p>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} />
      <p>{props.error}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error,
  }
}

export default connect(mapStateToProps, { login })(Login)