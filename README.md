ember-simple-track-helper
==============================================================================

A tiny helper to make small pieces of tracked state in templates.

Useful for scenarios where the *only* reason to have a backing class is to host some single piece of tracked state—for example, whether to show or hide a modal, with a default state of `false`:

```hbs
{{#let (track false) as |toggle|}}
  {{#unless toggle.value}}
    <button {{on "click" (fn toggle.update true)}}>Show it!</button>
  {{/unless}}
  <MyModal
    @isShowing={{toggle.value}}
    @onClose={{fn toggle.update false}}
  />
{{/let}}
```

(For folks from outside Ember: it's just like `useState`, but via autotracking.)

For usage in [Template Tag Format](https://guides.emberjs.com/release/components/template-tag-format/),
this addon provides `track` named export:

```gjs
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { track } from 'ember-simple-track-helper';

export default <template>
  {{#let (track false) as |toggle|}}
    {{#unless toggle.value}}
      <button {{on "click" (fn toggle.update true)}}>Show it!</button>
    {{/unless}}
    <MyModal
      @isShowing={{toggle.value}}
      @onClose={{fn toggle.update false}}
    />
  {{/let}}
</template>
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.28 or above
* Embroider or ember-auto-import v2.0.0 or above (this is [v2 addon](https://emberjs.github.io/rfcs/0507-embroider-v2-package-format.html))

### TypeScript

This project follows the current draft of [the Semantic Versioning for TypeScript Types][semver] proposal.

- **Currently supported TypeScript versions:** v5.0 - v5.5
- **Compiler support policy:** [simple majors][sm]
- **Public API:** all published types not in a `-private` module are public

[semver]: https://github.com/tracked-tools/ember-rfcs/blob/semver-for-ts/text/0730-semver-for-ts.md
[sm]: https://github.com/tracked-tools/ember-rfcs/blob/semver-for-ts/text/0730-semver-for-ts.md#simple-majors

This project ships [Glint](https://github.com/typed-ember/glint) types,
 which allow you when using TypeScript to get strict type checking in your templates.

 Unless you are using [strict mode](http://emberjs.github.io/rfcs/0496-handlebars-strict-mode.html) templates
 (via [first class component templates](http://emberjs.github.io/rfcs/0779-first-class-component-templates.html)),
 Glint needs a [Template Registry](https://typed-ember.gitbook.io/glint/using-glint/ember/template-registry)
 that contains entries for the template helper provided by this addon.
 To add these registry entries automatically to your app, you just need to import `ember-simple-track-helper/template-registry`
 from somewhere in your app. When using Glint already, you will likely have a file like
 `types/glint.d.ts` where you already import glint types, so just add the import there:

 ```ts
 import '@glint/environment-ember-loose';
 import type SimpleTrackHelperRegistry from 'ember-simple-track-helper/template-registry';
 declare module '@glint/environment-ember-loose/registry' {
   export default interface Registry extends SimpleTrackHelperRegistry, /* other addon registries */ {
     // local entries
   }
 }
 ```

 > **Note** Glint itself is still under active development, and as such breaking changes might occur.
 > Therefore, Glint support by this addon is also considered experimental, and not covered by our SemVer contract!

Installation
------------------------------------------------------------------------------

```
ember install ember-simple-track-helper
```

Alternatives
------------------------------------------------------------------------------

### ember-resources' cell

Docs: https://github.com/NullVoxPopuli/ember-resources/tree/main/docs
Cell's docs: https://ember-resources.nullvoxpopuli.com/functions/cell.html

```gjs
import { cell } from 'ember-resources';
import { on } from '@ember/modifier';

<template>
  {{#let (cell false) as |state|}}
    {{#unless state.current}}
      <button {{on "click" state.toggle}}>Show it!</button>
    {{/unless}}

    <MyModal
      @isShowing={{state.current}}
      @onClose={{state.toggle}}
    />
  {{/let}}
</template>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
