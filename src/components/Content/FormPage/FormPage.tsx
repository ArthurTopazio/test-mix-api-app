import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import style from './FormPage.module.scss'

//yup method
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please add some name'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please add some surname'),
  address: Yup.string()
    .max(30, 'Please write You adress shortly'),
  email: Yup.string()
    .email('Invalid email')
    .required('I cant get feedback without email'),
})

//example with yup
const FormExample = () => (
  <div>
    <h1>Test form (added by Formik/Yup)</h1>
    <Formik
      initialValues={{
        gender: '',
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        langueges: [],
        message: '',
        colors: '',
        acceptedTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor={'gender'}>Gender</label><br />
          <Field name="gender" type='radio' value='man' />
          <label htmlFor={'gender'}>male</label>
          <Field name="gender" type='radio' value='woman' />
          <label htmlFor={'gender'}>female</label>
          <br />
          <label htmlFor={'name'}>First name</label><br />
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null} <br />
          <label htmlFor={'surname'}>Second name</label><br />
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null} <br />
          <label htmlFor={'address'}>Address</label><br />
          <Field name="address" placeholder='house-street-city-country' />
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null} <br />
          <label htmlFor={'email'}>Email</label><br />
          <Field name="email" type="email" placeholder='name@service.domen' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null} <br />
          <label htmlFor={'langueges'}>Which langueges You know</label><br />
          <Field name="langueges" type="checkbox" value='english' />
          <label htmlFor={'langueges'}>english</label>
          <Field name="langueges" type="checkbox" value='portugues' />
          <label htmlFor={'langueges'}>portugues</label>
          <Field name="langueges" type="checkbox" value='chineise' />
          <label htmlFor={'langueges'}>chineise</label> <br />
          <Field name="message" as="textarea" /> <br />
          <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field><br />
          <label htmlFor={'acceptedTerms'}>accept terms</label>
          <Field name='acceptedTerms' type="checkbox" />
          <br />
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
        <div>This page is just a Formik & Yup test, so please dont worry about security of Your personal data, You can use any test-values that validate by this form</div>
        <FormExample />
      </div>
    </div>
  )
}

export default FormPage;

/*
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
)*/

/*
const validationSchema = Yup.object().shape({
  name: Yup.string().typeError('Should be a string').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'пароли не совпадают')
}
)

<Formik
initialValues={{
  name: '',
  secondName: '',
  password: '',
  confirmPassword: '',
  email: '',
  confirmEmail: ''
}}
validateOnBlur
onSubmit={(values) => { alert(values) }}
validationSchema={validationSchema}
>
{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
  <div>
    <p>
      <label htmlFor={'name'}>Name</label><br />
      <input type="text" name='name' onChange={handleChange} onBlur={handleBlur}
        value={values.name} />
    </p>
    {touched.name && errors.name && <p>{errors.name}</p>}
    <p>
      <label htmlFor={'secondName'}>Second Name</label><br />
      <input type="text" name='secondName' onChange={handleChange} onBlur={handleBlur}
        value={values.secondName} />
    </p>
    {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}
    <button
      disabled={!isValid && !dirty}
      //  onClick={handleSubmit}
      type={'submit'}>
      Send
    </button>
  </div>
)}
</Formik> */