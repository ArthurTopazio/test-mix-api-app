import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import style from './FormPage.module.scss'
import { withStyles } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import TextField from '@mui/material/TextField'
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

const courseCategory = [
  {
    value: "webDevelopment",
    label: "Web Development"
  },
  {
    value: "networking",
    label: "Networking"
  },
  {
    value: "computerScience",
    label: "Computer Science"
  }
];

const FormT = () => {

  return (
    <div>
      <form>
        <Card>
          <CardContent>
            <TextField
              id="firstName"
              label="First Name"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="lastName"
              label="Last Name"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              select
              id="course"
              label="Course Category"
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {courseCategory.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions >
            <Button color="primary" >
              SUBMIT
            </Button>
            <Button color="secondary">
              CLEAR
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

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
    <FormT />
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
const validationSchema = Yup.object().shape({
  name: Yup.string().typeError('Should be a string').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'пароли не совпадают')
}
)

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
          <div>
           <label>First name*</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null} 
            </div>
          
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <label htmlFor={'gender'}>Gender</label><br />
            <Field name="gender" type='radio' value='man' />
            <label htmlFor={'gender'}>male</label>
            <Field name="gender" type='radio' value='woman' />
            <label htmlFor={'gender'}>female</label>
            <br />
  
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
*/