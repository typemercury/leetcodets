import { canJump } from './index';

test('[2,3,1,1,4] can jump', () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
});

test('[3,2,1,0,4] cannot jump', () => {
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
});
