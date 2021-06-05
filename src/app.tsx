import path from 'path';
import fs from 'fs';

import corejs from 'core-js';
import React, {useCallback, useEffect, useState} from 'react';

import './index.css';

import type PathType from 'path';

function name(
  a, b, c, d,
) {
  return a + b + c + d;
}
const a = {foo: 1};

name(
  {a: 1}, {b: 2}, {c: 3}, {d: 'longlonglonglonglonglonglonglong'},
);
a;
const fn3 = () => ({a: 2});

export default function App() {
  const [value, setValue] = useState(0);
  const handler = useCallback(() => {
    null;
  }, []);
  const obj = {
    a: 1, b: 0.55, 'a-v': 3,
  };
  const isTrue = obj.a === 1;
  const uuu = obj.a;

  uuu;
  // a
  const foo = new Promise((resolve, reject) => {
    // fs('foo.txt', function(err, result) {
    const obj = 1;
    const err = false;
    const result = null;

    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
    // });
  }).then(() => 1)
    .then(() => {
      console.log(2);
    });

  async function getSomething(fn) {
    const a = 1;

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
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, {
    a: 1, b: 2, caniuse: 'yes u can',
  }];
  const [, su] = [1, 2];
  const hello = 'world';
  let s = 1 + 3;

  [1].toString();
  hello;

  s++;
  s++ + 1;
  obj.a;
  s;
  ob2; arr;
  for (let i = 0; i < 10; i++) {
    //
  }
  //  let 啊
  const fn = (
    a:string, b:any, c?: any,
  ) => {
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
  const str = 'a' + 'b';

  parseInt('10', 2);
  if (obj) {
    console.log(1);
  }
  if (true) {
    1;
  }
  const bar = (a) => a;

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
