import { withFormik } from "formik"
import * as Yup from 'yup'
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

//need to test check-box&radio

const courseCategory = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName ? errors.firstName : ""}
            error={touched.firstName && Boolean(errors.firstName)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          />
          <TextField
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName ? errors.lastName : ""}
            error={touched.lastName && Boolean(errors.lastName)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          />
        </div>
        <div>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          />
          <TextField
            select
            id="course"
            label="Course Category"
            value={values.course}
            onChange={handleChange("course")}
            helperText={touched.course ? errors.course : ""}
            error={touched.course && Boolean(errors.course)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          >
            {courseCategory.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password ? errors.password : ""}
            error={touched.password && Boolean(errors.password)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.confirmPassword ? errors.confirmPassword : ""}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            margin="dense"
            variant="outlined"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '45%',
                lg: '45%',
                xl: '45%',
              }
            }}
          />
        </div>
        <Button type="submit" color="primary" disabled={isSubmitting}>
          SUBMIT
        </Button>
        <Button color="secondary" onClick={handleReset}>
          CLEAR
        </Button>
      </form>
    </div >
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    check,
    firstName,
    lastName,
    email,
    course,
    password,
    confirmPassword,
  }) => {
    return {
      check: false,
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      course: course || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(1, 'Too short!')
      .max(15, 'Too long for name')
      .required("Please enter Your name"),
    lastName: Yup.string()
      .min(1, 'too short!')
      .max(15, 'Too long for surname')
      .required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    course: Yup.string()
      .required("Select your favorite course category"),
    password: Yup.string()
      .min(3, "Password must contain at least 3 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(form);

export default Form


