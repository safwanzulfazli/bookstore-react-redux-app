import React from 'react';

const InputWrapper = ({
  setInput, inputValue, labelValue, type, inputId,
}) => (
  <div className="input-wrapper">
    <label
      htmlFor={inputId}
      className="user-form__label"
    >
      { labelValue}
    </label>
    <input
      type={type}
      id={inputId}
      className="form-input"
      value={inputValue}
      onChange={e => setInput(e.target.value)}
    />
  </div>
);

export default InputWrapper;