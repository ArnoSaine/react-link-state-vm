import selectedLink from './selectedLink';

function setState(name, converter) {
  return ({ [name]: value }) => this.setState({ [name]: converter(value) });
}

// Select non-string value
// selectedLink :: ReactInstance => (String, Object) -> {Any value, Function onChange}
// Select multiple non-string values
// selectedLink :: ReactInstance => (String, Object, Boolean) -> {Array value, Function onChange}
export default function(name, options, multiple) {
  const { value, onChange } = {
    ...this,
    // Convert: string value(s) --> option array value(s).
    setState: this::setState(
      name,
      multiple
        ? values =>
            options
              .filter((option, index) => values.includes(String(index)))
              .map(({ value }) => value)
        : value => options[Number(value)].value
    )
  }::selectedLink(name, multiple);
  return {
    children: options
      .map(({ label }, index) => ({
        children: label,
        key: index,
        value: index
      }))
      .map(props => <option {...props} />),
    multiple,
    // Convert: option array value(s) --> string value(s).
    value: multiple
      ? options
          .map(({ value }, index) => ({ value, index }))
          .filter(option => value.includes(option.value))
          .map(({ index }) => String(index))
      : String(options.findIndex(option => option.value === value)),
    onChange
  };
}
