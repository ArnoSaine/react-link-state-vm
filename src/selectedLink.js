import getValue from './getValue';

const nextMultiValues = options =>
  [...options].filter(({ selected }) => selected).map(({ value }) => value);

// Select
// selectedLink :: ReactInstance => String -> {String value, Function onChange}
// Select multiple
// selectedLink :: ReactInstance => String -> {Array value, Function onChange}
export default function(name, multiple) {
  return {
    multiple,
    value: this::getValue(name, multiple ? [] : undefined),
    onChange: ({ target: { options, value } }) =>
      this.setState({
        [name]: multiple ? nextMultiValues(options) : value
      })
  };
}
