import React from 'react';

function Input({ input, meta, ...props }) {
  return (
    <div>
      <input {...input} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}

export default Input;
