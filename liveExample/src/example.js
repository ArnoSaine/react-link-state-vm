import React, { Component } from 'react';
import { checkedLink, selectedLink, valueLink } from 'react-link-state-vm';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>react-link-state-vm</h1>

        <h4>Text</h4>
        <input type="text" {...this::valueLink('name')} />

        <h4>Checkbox</h4>
        <label htmlFor="firstName">
          <input type="checkbox" {...this::checkedLink('race')} /> Race
        </label>

        <h4>Multi-checkbox</h4>
        <label>
          <input
            type="checkbox"
            {...this::checkedLink('category-multiple', 'motogp')}
          />{' '}
          MotoGP
        </label>
        <label>
          <input
            type="checkbox"
            {...this::checkedLink('category-multiple', 'moto2')}
          />{' '}
          Moto2
        </label>
        <label>
          <input
            type="checkbox"
            {...this::checkedLink('category-multiple', 'moto3')}
          />{' '}
          Moto3
        </label>

        <h4>Radio</h4>
        <label>
          <input type="radio" {...this::checkedLink('category', 'motogp')} />{' '}
          MotoGP
        </label>
        <label>
          <input type="radio" {...this::checkedLink('category', 'moto2')} />{' '}
          Moto2
        </label>
        <label>
          <input type="radio" {...this::checkedLink('category', 'moto3')} />{' '}
          Moto3
        </label>

        <h4>Select</h4>
        <select {...this::selectedLink('bike')}>
          <option value="ducati">Ducati</option>
          <option value="honda">Honda</option>
          <option value="suzuki">Suzuki</option>
          <option value="yamaha">Yamaha</option>
        </select>

        <h4>Select multiple</h4>
        <select {...this::selectedLink('bikes')} multiple>
          <option value="ducati">Ducati</option>
          <option value="honda">Honda</option>
          <option value="suzuki">Suzuki</option>
          <option value="yamaha">Yamaha</option>
        </select>

        <h4>this.state</h4>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default <Example />;
