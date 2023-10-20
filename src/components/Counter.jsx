import React from 'react';
import Button from './Button';
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

const increment = () => {
    setCount(count+1);
}

const decrement = () => {
    count !== 0  ? setCount(count-1) :  setCount(count);
}

  return (
    <div>
      <Button className="btn btn-increment mb-2" text = "Increment" onClick = {increment}/>
        <div className='text-center'>
            <span>
                {count}
            </span>
        </div>
      <Button className="btn btn-decrement mt-2" text = "Decrement" onClick = {decrement}/>
    </div>
  )
}

export default Counter
