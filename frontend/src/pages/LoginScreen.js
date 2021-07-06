import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUser } from '../store/reducers/authSlice';
import { useHistory } from 'react-router-dom';
import { loginSchema } from '../validation/validationSchemas';
import styles from './LoginScreen.module.css';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, loading, error, errorMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user.token) {
      history.push('/about');
    }
  }, [user, history]);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(loginUser(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type='email' name='email' />
              <ErrorMessage name='email' component='div' />
              <Field type='password' name='password' />
              <ErrorMessage name='password' component='div' />
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginScreen;
