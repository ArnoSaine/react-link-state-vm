import getValue from './getValue';

function getChangeHandler(name, handleChange) {
  return ({ target }) => this.setState({ [name]: handleChange(target) });
}

const nextMultiValues = options =>
  [...options].filter(({ selected }) => selected).map(({ value }) => value);

// Select
// selectedLink :: ReactInstance => String -> {String value, Function onChange}
// Select multiple
// selectedLink :: ReactInstance => String, Boolean -> {Array value, Function onChange}
export default function(name, multiple) {
  return {
    multiple,
    value: this::getValue(name, multiple ? [] : undefined),
    onChange: this::getChangeHandler(
      name,
      multiple
        ? ({ options }) => nextMultiValues(options)
        : ({ value }) => value
    )
  };
}
