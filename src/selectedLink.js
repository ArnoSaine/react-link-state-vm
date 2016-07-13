import getValue from './getValue';

const nextMultiValues = options => [...options]
    .filter(({selected}) => selected)
    .map(({value}) => value);

// Select
// selectedLink :: ReactInstance => String -> {String value, Function onChange}
// Select multiple
// selectedLink :: ReactInstance => String -> {Array value, Function onChange}
export default function (name) {
	return {
		value: this::getValue(name),
		onChange: ({target: {multiple, options, value}}) =>
            this.setState({
                [name]: multiple
                    ? nextMultiValues(options)
                    : value
            })
	};
}
