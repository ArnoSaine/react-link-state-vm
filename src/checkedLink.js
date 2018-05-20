import getValue from './getValue';

const nextMultiValues = (checked, current = [], value) =>
  checked ? [...current, value] : current.filter(checked => checked !== value);

// Checkbox
// checkedLink :: ReactInstance => String -> {String name, Boolean checked, Function onChange}
// Radio and Multi-checkbox
// checkedLink :: ReactInstance => (string, String) -> {String name, Boolean checked, Function onChange}
export default function(name, value) {
  return {
    name,
    checked:
      value === undefined
        ? this::getValue(name, false)
        : this::getValue(name, []).indexOf(value) > -1,
    // : this::getValue(name, []).includes(value),
    onChange:
      value === undefined
        ? ({ target: { checked } }) =>
            this.setState({
              [name]: checked
            })
        : ({ target: { checked, type } }) =>
            this.setState(state => ({
              [name]:
                type === 'checkbox'
                  ? nextMultiValues(checked, (state ?? {})[name], value)
                  : value
            }))
  };
}
