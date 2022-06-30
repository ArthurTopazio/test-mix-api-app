import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import style from './FormPage.module.scss'
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);

//switchMUI component
export function UnstyledSwitches() {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

  return (
    <div>
      <SwitchUnstyled component={Root} {...label} />
    </div>
  );
}


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
  password: Yup.string()
    .min(2, 'Too short for password')
    .max(8, 'Too lang, max 8 symbols')
    .required('Please write password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'passwords incorrect')
    .required('Password is incorrect'),
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
        password: '',
        confirmPassword: '',
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
          <label htmlFor={'password'}>Enter Your password</label><br />
          <Field name="password" type='password' />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null} <br />
          <label htmlFor={'confirmPassword'}>Confirm password</label><br />
          <Field name="confirmPassword" type='password' />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null} <br />
          <UnstyledSwitches />
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