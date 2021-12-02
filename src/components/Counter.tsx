import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/stores';
import { clear, decrement, increment } from '~/stores/counterSlice';

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <span>{count}</span>
      <div>
        <input type="button" value="+" onClick={() => dispatch(increment())} />
        <input type="button" value="-" onClick={() => dispatch(decrement())} />
        <input type="button" value="C" onClick={() => dispatch(clear())} />
      </div>
    </>
  );
};
