import { expectTypeOf } from 'expect-type';
import { State } from '../src/helpers/track';

expectTypeOf<State<string>>().toHaveProperty('value');
expectTypeOf<State<string>['value']>().toEqualTypeOf<string>();
expectTypeOf<State<string>>().toHaveProperty('update');
expectTypeOf<State<string>['update']>().parameters.toEqualTypeOf<[string]>();
expectTypeOf<State<string>['update']>().returns.toEqualTypeOf<void>();
