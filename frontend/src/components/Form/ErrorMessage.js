import React from 'react';

const ErrorMessage = ({ visible, error }) => {
  if (!visible || !error) {
    return null;
  } else {
  }
  return <div>{error}</div>;
};

export default ErrorMessage;
