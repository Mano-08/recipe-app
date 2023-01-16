import React from 'react';

function Error() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3%',
        fontSize: '1.5rem',
        color: 'azure',
        userSelect: 'none',
      }}
    >
      <p>
        <span style={{ color: 'red' }}>X</span>
        {' '}
        Error
      </p>
    </div>
  );
}

export default Error;
