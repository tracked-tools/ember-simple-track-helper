import { helper } from '@ember/component/helper';

export function minus([value, subtrahend]: [number, number]) {
  return value - subtrahend;
}

export default helper(minus);
