import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

class State<T> {
  @tracked private _value: T;

  get value(): T {
    return this._value;
  }

  constructor(initial: T) {
    this._value = initial;
  }

  update = (newValue: T) => {
    this._value = newValue;
  };
}

// Only export the type-side. At least for now!
export type { State };

export function track<T>([value]: [T]) {
  return new State(value);
}

export default helper(track);
