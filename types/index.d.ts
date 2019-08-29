export enum InputType {
  Number = "__number__",
  Checkbox = "__checkbox__",
  Text = "__text__"
}

export type InputValue<INPUT_TYPE extends InputType> = {
  [InputType.Number]: number;
  [InputType.Checkbox]: boolean;
  [InputType.Text]: string;
}[INPUT_TYPE];

export interface Option<
  INPUT_TYPE extends InputType,
  INPUT_VALUE extends InputValue<INPUT_TYPE> = InputValue<INPUT_TYPE>
> {
  kind: INPUT_TYPE;
  defaultValue?: INPUT_VALUE;
  format?: (input: INPUT_VALUE) => INPUT_VALUE;
}

export type Options = Record<string, AnyOption>;

export type AnyOption =
  | Option<InputType.Number>
  | Option<InputType.Checkbox>
  | Option<InputType.Text>;

export interface Result<T extends InputValue<InputType>> {
  getValue: () => T;
  setValue: (newValue: T) => void;
}

export type Results<OPTIONS extends Options> = {
  [P in keyof OPTIONS]: Result<InputValue<OPTIONS[P]["kind"]>>;
};

export function useForm<OPTIONS extends Options>(
  options: OPTIONS
): Results<OPTIONS>;
