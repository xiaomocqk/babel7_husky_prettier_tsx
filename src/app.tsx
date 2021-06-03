import corejs from 'core-js';
import path from 'path';
// import qs from 'qs'
import React, { useCallback, useEffect, useState } from 'react';

const a ={
  foo: 1
};
a;
export default function App(){
  const [value, setValue] = useState(0);
  const handler = useCallback(() => null, []);
  const obj = {
    a: 1,
    b: 2,
    'a-v': 3
  };
  const fn =() => null;
  fn;
  obj;
  useEffect(() => {
    setTimeout(() => {
      setValue(1);
      handler();
      path;
    }, 1000);
    console.log(corejs);
  },[handler]);
  if (obj){
    console.log(1);
  }
  return (
    <>
      <div className="abc">react app1{value}</div>
      <button className="btn" style={{}}
      >
          按钮
      </button>
    </>
  );
}
