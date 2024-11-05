import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class State {
  static {
    g(this.prototype, "_value", [tracked]);
  }
  #_value = (i(this, "_value"), void 0);
  get value() {
    return this._value;
  }
  constructor(initial) {
    this._value = initial;
  }
  update = newValue => {
    this._value = newValue;
  };
}

// Only export the type-side. At least for now!

function track([value]) {
  return new State(value);
}
var track$1 = helper(track);

export { track$1 as default, track };
//# sourceMappingURL=track.js.map
