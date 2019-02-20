import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | x-tree-checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it calls action when checked and unchecked', async function(assert) {
    this.checked = false;
    this.set('toggleCheck', () => {
      this.checked = !this.checked;
    });
    this.set('model', {});

    await render(hbs`{{x-tree-checkbox model=model toggleCheck=(action toggleCheck)}}`);

    assert.equal(this.checked, false);
    
    await click('input[type=checkbox]');

    assert.equal(this.checked, true);
    
    await click('input[type=checkbox]');

    assert.equal(this.checked, false);
  });
});
