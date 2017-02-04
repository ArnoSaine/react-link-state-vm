import getValue from './getValue';

// valueLink :: ReactInstance => String -> {String value, Function onChange}
export default function (name) {
    return {
        value: this::getValue(name, ''),
        onChange: ({target: {value}}) =>
            this.setState({
                [name]: value
            })
    };
}
