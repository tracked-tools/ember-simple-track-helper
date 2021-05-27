ember-simple-track-helper
==============================================================================

A tiny helper to make small pieces of tracked state in templates.

Useful for scenarios where the *only* reason to have a backing class is to host some single piece of tracked state—for example, whether to show or hide a modal, with a default state of `false`:

```hbs
{{#let (track false) as |toggle|}}
  {{unless toggle.value}}
    <button {{on "click" (fn toggle.update true)}}>Show it!</button>
  {{/unless}}
  <MyModal
    @isShowing={{toggle.value}}
    @onClose={{fn toggle.update false}}
  />
{{/let}}
```

(For folks from outside Ember: it's just like `useState`, but via autotracking.)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

### TypeScript

This project follows the current draft of [the Semantic Versioning for TypeScript Types][semver] proposal.

- **Currently supported TypeScript versions:** v4.1, v4.2, and v4.3
- **Compiler support policy:** [simple majors][sm]
- **Public API:** all published types not in a `-private` module are public

[semver]: https://github.com/chriskrycho/ember-rfcs/blob/semver-for-ts/text/0730-semver-for-ts.md
[sm]: https://github.com/chriskrycho/ember-rfcs/blob/semver-for-ts/text/0730-semver-for-ts.md#simple-majors

Installation
------------------------------------------------------------------------------

```
ember install ember-simple-track-helper
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
