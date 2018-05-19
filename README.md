# react-link-state-vm

Link state with virtual method.

[Live example](http://arnosaine.github.io/react-link-state-vm)

To use the experimental function bind operator `::`, you need [@babel/plugin-proposal-function-bind](https://www.npmjs.com/package/@babel/plugin-proposal-function-bind) (or [@babel/preset-stage-0](https://www.npmjs.com/package/@babel/preset-stage-0)). Or you can use `Function.prototype.call` to assign correct `this` value. Example:

```js
// Proposal 👍
this::valueLink("name");

// Standard
valueLink.call(this, "name");
```

## Example Input

```js
import { valueLink } from "react-link-state-vm";

class ExampleWithInput extends Component {
  render() {
    // this.state.name => undefined | 'some text'
    return <input type="text" {...this::valueLink("name")} />;
  }
}
```

### Checkbox and Radio

```js
import { checkedLink } from "react-link-state-vm";

class ExampleWithCheckbox extends Component {
  render() {
    // this.state.race => undefined | true | false
    return <input type="checkbox" {...this::checkedLink("race")} />;
  }
}

class ExampleWithMultiCheckbox extends Component {
  render() {
    // this.state.category => undefined | [] | ['motogp', 'moto3', ...]
    return (
      <div>
        <input type="checkbox" {...this::checkedLink("category", "motogp")} />
        <input type="checkbox" {...this::checkedLink("category", "moto2")} />
        <input type="checkbox" {...this::checkedLink("category", "moto3")} />
      </div>
    );
  }
}

class ExampleWithRadio extends Component {
  render() {
    // this.state.category => undefined | 'motogp' | ...
    return (
      <div>
        <input type="radio" {...this::checkedLink("category", "motogp")} />
        <input type="radio" {...this::checkedLink("category", "moto2")} />
        <input type="radio" {...this::checkedLink("category", "moto3")} />
      </div>
    );
  }
}
```

### Select

```js
import { selectedLink } from "react-link-state-vm";

class ExampleWithSelect extends Component {
  render() {
    // this.state.bike => undefined | 'ducati' | ...
    return (
      <select {...this::selectedLink("bike")}>
        <option value="ducati">Ducati</option>
        <option value="honda">Honda</option>
        <option value="suzuki">Suzuki</option>
        <option value="yamaha">Yamaha</option>
      </select>
    );
  }
}

class ExampleWithMultiSelect extends Component {
  render() {
    // this.state.bikes => undefined | [] | ['ducati', 'honda', ...]
    return (
      <select {...this::selectedLink("bikes")} multiple>
        <option value="ducati">Ducati</option>
        <option value="honda">Honda</option>
        <option value="suzuki">Suzuki</option>
        <option value="yamaha">Yamaha</option>
      </select>
    );
  }
}
```

### About the Implementation

In a simple form, `valueLink` could be just a function that returns `value` and `onChange` handler.

```js
function valueLink(name) {
  return {
    value: this.state[name],
    onChange: ({ target: { value } }) =>
      this.setState({
        [name]: value
      })
  };
}
```
