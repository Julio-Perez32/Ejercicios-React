import React from 'react'

const Alert2 = ({ titulo, link }) => {
  return (
    <div className="alert alert-primary" role="alert">
      {titulo} <a href="#" className="alert-link">{link}</a>
    </div>
  );
};
export default Alert2;