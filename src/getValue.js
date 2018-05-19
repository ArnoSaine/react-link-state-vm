// Get value from state with optional default value. State can be null.
export default function(name, defaultValue) {
  const { [name]: value = defaultValue } = this.state || {};
  return value;
}
