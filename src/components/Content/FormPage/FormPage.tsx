import Form from './Form'

import style from './FormPage.module.scss'

const FormExample = () => (
  <div>
    <h1>Test form (added by Formik/Yup)</h1>
    <Form />
  </div>
)

const FormPage = () => {

  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>!!!This page is just a Formik & Yup test, so please dont worry about security of Your personal data, You can use any test-values that validate by this form</div>
        <FormExample />
      </div>
    </div>
  )
}

export default FormPage;
