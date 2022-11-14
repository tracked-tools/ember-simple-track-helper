import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | track', function (hooks) {
  setupRenderingTest(hooks);

  test('it provides simple tracked state', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`
      {{#let (track 0) as |state|}}
        <button data-down {{on "click" (fn state.update (minus state.value 1))}}>&minus</button>
        <span data-value>{{state.value}}</span>
        <button data-up {{on "click" (fn state.update (plus state.value 1))}}>&minus;</button>
      {{/let}}
    `);

    assert.dom('[data-value]').hasText('0');

    await click('[data-up]');
    assert.dom('[data-value]').hasText('1');

    await click('[data-up]');
    assert.dom('[data-value]').hasText('2');

    await click('[data-down]');
    assert.dom('[data-value]').hasText('1');

    await click('[data-down]');
    assert.dom('[data-value]').hasText('0');
  });
});
