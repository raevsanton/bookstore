import React from 'react';
import success from '../assets/checked.svg';

export const Success = (): React.ReactElement => (
  <>
    <img src={success} alt="success" />
    <br />
    <br />
    <h2>Successful</h2>
  </>
);
