import React from 'react';

const KnockPin = ({num, index, pinKiller}) => (
  <div className="button-wrapper">
    <button className="number" onClick={()=> pinKiller(num)}>
      {num}
    </button>
  </div>
)


export default KnockPin;