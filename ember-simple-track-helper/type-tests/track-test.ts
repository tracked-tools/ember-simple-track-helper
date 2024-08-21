import { expectTypeOf } from 'expect-type';
import { type State } from '../src/helpers/track.ts';

expectTypeOf<State<string>>().toHaveProperty('value');
expectTypeOf<State<string>['value']>().toEqualTypeOf<string>();
expectTypeOf<State<string>>().toHaveProperty('update');
expectTypeOf<State<string>['update']>().parameters.toEqualTypeOf<[string]>();
expectTypeOf<State<string>['update']>().returns.toEqualTypeOf<void>();
