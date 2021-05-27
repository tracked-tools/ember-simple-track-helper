import { helper } from '@ember/component/helper';

export function plus([value, addend]: [number, number]) {
  return value + addend;
}

export default helper(plus);
