import React from 'react';

export const a: number = 100;
const arr = [1, 2, 3].map((n) => n + 1);
[4, 5].forEach((n) => n);

const b = 'ab';
class Foo {
  constructor() {
    // super()
  }
}
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
