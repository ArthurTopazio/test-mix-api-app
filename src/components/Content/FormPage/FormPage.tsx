import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import style from './FormPage.module.scss'

//yup method
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('We cant use that name'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .required('impossible to use'),
  adres: Yup.string()
    .max(20, 'Please check your adres'),
  email: Yup.string().email('Invalid email').required('impossible to use'),
})

//example with yup
const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        adres: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" placeholder='first name' />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" placeholder='last name' />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="adres" placeholder='adres' />
          {errors.adres && touched.adres ? (
            <div>{errors.adres}</div>
          ) : null}
          <Field name="email" type="email" placeholder='email' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

const FormPage = () => {
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div>Form</div>
        <ValidationSchemaExample />
      </div>
    </div>
  )
}

export default FormPage;