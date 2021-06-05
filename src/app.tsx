import corejs from 'core-js';
import path from 'path';
// import qs from 'qs'
import React, { useCallback, useEffect, useState } from 'react';

const a = {
  foo: 1,
};
a;
export default function App() {
  const [value, setValue] = useState(0);
  const handler = useCallback(() => {
    null;
  }, []);
  const obj = {
    a: 1,

    b: 2,
    'a-v': 3,
  };
  // a
  const foo = new Promise((resolve, reject) => {
    // fs('foo.txt', function(err, result) {
    const err = false;
    const result = null;
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
    // });
  });

  async function getSomething(fn) {
    return await fn(null, {});
  }
  const s2:any = {};
  new Promise((resolve, reject) => {
    getSomething((err: any, data: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  new Promise((resolve, reject) => {
    getSomething((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  const ob2 = {a: 1};//   树简历
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, {a: 1, b: 2, caniuse: 'yes u can'}];
  const [, su] = [1, 2];
  const hello = 'world';
  [1].toString();
  hello;
  let s = 1 + 3;
  s++;
  s++ + 1;
  obj.a;
  s;
  ob2; arr;
  for (let i = 0; i < 10; i++) {
    //
  }
  //  let 啊
  const fn = (a:string, b:any) => {
    a; b; null;
  };
  fn('testStr', {cc: 1});
  obj;
  useEffect(() => {
    setTimeout(() => {
      setValue(1);
      handler();
      path;
    }, 1000);
    console.log(corejs);
  }, [handler]);
  if (obj) {
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
