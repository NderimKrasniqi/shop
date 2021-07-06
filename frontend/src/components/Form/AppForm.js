import React from 'react';
import { Formik } from 'formik';
const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {() => <>{children} </>}
    </Formik>
  );
};

export default AppForm;
