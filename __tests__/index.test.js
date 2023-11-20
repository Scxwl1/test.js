import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.getSum(1, 2), 3);
  assert.strictEqual(funcs.getSum(3, -5), -2);
});

test('step2', () => {
  assert.strictEqual(funcs.getSmallestNumber(0, 1000), 0);
  assert.strictEqual(funcs.getSmallestNumber(-1000, 10), -1000);
});

test('step3', () => {
  assert.strictEqual(funcs.castBoolean('Hexlet'), true);
  assert.strictEqual(funcs.castBoolean(0), false);
  assert.strictEqual(funcs.castBoolean(NaN), false);
  assert.strictEqual(funcs.castBoolean(), false);
  assert.strictEqual(funcs.castBoolean(''), false);
  assert.strictEqual(funcs.castBoolean(() => { }), true);
  assert.strictEqual(funcs.castBoolean(122343n), true);
  assert.strictEqual(funcs.castBoolean(console.log), true);
  assert.strictEqual(funcs.castBoolean(console.log()), false);
});

test('step4', () => {
  assert.strictEqual(funcs.capitalize('Hexlet', 2), 'HeXlet');
  assert.strictEqual(funcs.capitalize('Hello, world!', 22), 'Hello, world!');
  assert.strictEqual(funcs.capitalize('What`s up!', -22), 'What`s up!');
  assert.strictEqual(funcs.capitalize('Hello', 0), 'Hello');
});

test('step5', () => {
  assert.strictEqual(funcs.countCapitalLetters('Hexlet'), 1);
  assert.strictEqual(funcs.countCapitalLetters(''), 0);
  assert.strictEqual(funcs.countCapitalLetters('   a   '), 0);
  assert.strictEqual(funcs.countCapitalLetters('hello world'), 0);
  assert.strictEqual(funcs.countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'), 33);
});
