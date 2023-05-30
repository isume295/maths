import React from 'react';

export default function calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="row">

          <input type="number" placeholder="0" />

        </div>
        <div className="row">
          <div className="column">AC</div>
          <div className="column">+/-</div>
          <div className="column">%</div>
          <div className="column orange">/</div>
        </div>
        <div className="row">
          <div className="column">7</div>
          <div className="column">8</div>
          <div className="column">9</div>
          <div className="column orange">*</div>
        </div>
        <div className="row">
          <div className="column">4</div>
          <div className="column">5</div>
          <div className="column">6</div>
          <div className="column orange">-</div>
        </div>
        <div className="row">
          <div className="column">1</div>
          <div className="column">2</div>
          <div className="column">3</div>
          <div className="column orange">+</div>
        </div>
        <div className="row">
          <div className="column">0</div>
          <div className="column">.</div>
          <div className="column orange">=</div>
        </div>
      </div>
    </div>

  );
}
