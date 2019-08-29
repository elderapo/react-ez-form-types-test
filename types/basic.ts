import { someFunc, InputType } from "lib";

const basic = someFunc({
  a: {
    kind: InputType.Number,
    format: input => parseInt(input.toFixed(0), 10) // $ExpectType (input: number) => number
  },

  b: {
    kind: InputType.Checkbox,
    format: input => input.valueOf() // $ExpectType (input: boolean) => boolean
  },

  c: {
    kind: InputType.Text,
    format: input => input.toUpperCase() // $ExpectType (input: string) => string
  }
});

basic.a.getValue; // $ExpectType () => number
basic.a.getValue(); // $ExpectType number
basic.a.setValue; // $ExpectType (newValue: number) => void
basic.a.setValue("abc"); // $ExpectError

basic.b.getValue; // $ExpectType () => boolean
basic.b.getValue(); // $ExpectType boolean
basic.b.setValue; // $ExpectType (newValue: boolean) => void
basic.b.setValue("abc"); // $ExpectError

basic.c.getValue; // $ExpectType () => string
basic.c.getValue(); // $ExpectType string
basic.c.setValue; // $ExpectType (newValue: string) => void
basic.c.setValue(1); // $ExpectError

basic.d; // $ExpectError
