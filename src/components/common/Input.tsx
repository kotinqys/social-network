import React from 'react';

type PropsType = {
  input: HTMLCollection
  meta: any
}

const Input:React.FC<PropsType> = ({ input, meta, ...props }) => {
  return (
    <div>
      <input {...input} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}

export default Input;
