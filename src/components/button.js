import React from 'react';

export default function Button({ value, className, handleClick }) {
  return (
    <button type="button" name={value} className={className} onClick={handleClick}>
      {value}
    </button>
  );
}
