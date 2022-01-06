import React from 'react';
import error from '../assets/cancel.svg';

export const Error = (): React.ReactElement => (
  <>
    <img src={error} alt="error" />
    <br />
    <br />
    <h2>Error</h2>
  </>
);
