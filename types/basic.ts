import { useForm, InputType } from "lib";

const basic = useForm({
  input1: {
    kind: InputType.Number,
    format: input => parseInt(input.toFixed(0), 10) // $ExpectType (input: number) => number
  },

  someCheckbox: {
    kind: InputType.Checkbox,
    format: input => input.valueOf() // $ExpectType (input: boolean) => boolean
  },

  someNormalInput: {
    kind: InputType.Text,
    format: input => input.toUpperCase() // $ExpectType (input: string) => string
  }
});

basic.input1.getValue; // $ExpectType () => number
basic.input1.getValue(); // $ExpectType number
basic.input1.setValue; // $ExpectType (newValue: number) => void
basic.input1.setValue("abc"); // $ExpectError

basic.someCheckbox.getValue; // $ExpectType () => boolean
basic.someCheckbox.getValue(); // $ExpectType boolean
basic.someCheckbox.setValue; // $ExpectType (newValue: boolean) => void
basic.someCheckbox.setValue("abc"); // $ExpectError

basic.someNormalInput.getValue; // $ExpectType () => string
basic.someNormalInput.getValue(); // $ExpectType string
basic.someNormalInput.setValue; // $ExpectType (newValue: string) => void
basic.someNormalInput.setValue(1); // $ExpectError

basic.d; // $ExpectError
