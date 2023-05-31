import { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });
  const { next, operation, total } = state;
  const eventHandler = (e) => {
    setState(calculate(state, e.target.name));
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="row">
          <div className="display">{next || operation || total || 0}</div>
        </div>
        <div className="row">
          <Button className="column" value="AC" handleClick={eventHandler} />
          <Button className="column" value="+/-" handleClick={eventHandler} />
          <Button className="column" value="%" handleClick={eventHandler} />
          <Button className="column orange" value="÷" handleClick={eventHandler} />
        </div>
        <div className="row">
          <Button className="column" value="7" handleClick={eventHandler} />
          <Button className="column" value="8" handleClick={eventHandler} />
          <Button className="column" value="9" handleClick={eventHandler} />
          <Button className="column orange" value="*" handleClick={eventHandler} />
        </div>
        <div className="row">
          <Button className="column" value="4" handleClick={eventHandler} />
          <Button className="column" value="5" handleClick={eventHandler} />
          <Button className="column" value="6" handleClick={eventHandler} />
          <Button className="column orange" value="-" handleClick={eventHandler} />
        </div>
        <div className="row">
          <Button className="column" value="1" handleClick={eventHandler} />
          <Button className="column" value="2" handleClick={eventHandler} />
          <Button className="column" value="3" handleClick={eventHandler} />
          <Button className="column orange" value="+" handleClick={eventHandler} />
        </div>
        <div className="row">
          <Button className="column" value="0" handleClick={eventHandler} />
          <Button className="column" value="." handleClick={eventHandler} />
          <Button className="column orange" value="=" handleClick={eventHandler} />
        </div>
      </div>
    </div>
  );
}
