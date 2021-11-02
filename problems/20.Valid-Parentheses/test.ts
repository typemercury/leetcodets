import { isValid } from './index';

test("'()' is valid", () => {
  expect(isValid('()')).toEqual(true);
});

test("'()[]{}' is valid", () => {
  expect(isValid('()[]{}')).toEqual(true);
});

test("'(]' is invalid", () => {
  expect(isValid('(]')).toEqual(false);
});

test("'([)]' is invalid", () => {
  expect(isValid('([)]')).toEqual(false);
});

test("'{[]}' is valid", () => {
  expect(isValid('{[]}')).toEqual(true);
});

test("'(){}}{' is invalid", () => {
  expect(isValid('(){}}{')).toEqual(false);
});
