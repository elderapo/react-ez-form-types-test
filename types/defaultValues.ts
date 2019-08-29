const tmp = 123;

// import { someFunc, InputType } from "lib";

// const defaultValues = someFunc({
//   a: {
//     kind: InputType.Number,
//     defaultValue: 3, // $ExpectType number
//     format: input => parseInt(input.toFixed(0), 10) // $ExpectType (input: number) => number
//   },

//   // $ExpectError
//   b: {
//     kind: InputType.Checkbox,
//     defaultValue: 3, // <--- wrong type here breaks everything
//     format: input => input.valueOf() // $ExpectError
//   },

//   c: {
//     kind: InputType.Text,
//     format: input => input.toUpperCase() // $ExpectType (input: string) => string
//   }
// });

// defaultValues.a.getValue; // $ExpectType () => number
// defaultValues.a.getValue(); // $ExpectType number
// defaultValues.a.setValue; // $ExpectType (newValue: number) => void
// defaultValues.a.setValue("abc"); // $ExpectError

// defaultValues.b.getValue; // $ExpectType () => boolean
// defaultValues.b.getValue(); // $ExpectType boolean
// defaultValues.b.setValue; // $ExpectType (newValue: boolean) => void
// defaultValues.b.setValue("abc"); // $ExpectError

// defaultValues.c.getValue; // $ExpectType () => string
// defaultValues.c.getValue(); // $ExpectType string
// defaultValues.c.setValue; // $ExpectType (newValue: string) => void
// defaultValues.c.setValue(1); // $ExpectError

// defaultValues.d; // $ExpectError
