import React, { Component } from 'react';
import {
  checkedLink,
  selectedLink,
  valueLink,
  selectedLinkOptions
} from 'react-link-state-vm';

const a = {};
const b = true;
const c = false;
const d = 0;
const e = 1;
const f = null;

class Example extends Component {
  render() {
    return (
      <div>
        <h1>react-link-state-vm</h1>

        <h4>Text</h4>
        <input type="text" {...this::valueLink('name')} />

        <h4>Checkbox</h4>
        <label>
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
        <select {...this::selectedLink('bikes', true)}>
          <option value="ducati">Ducati</option>
          <option value="honda">Honda</option>
          <option value="suzuki">Suzuki</option>
          <option value="yamaha">Yamaha</option>
        </select>

        <h4>Select non-string value</h4>
        <select
          {...this::selectedLinkOptions('custom type', [
            { label: 'A', value: a },
            { label: 'B', value: b },
            { label: 'C', value: c },
            { label: 'D', value: d },
            { label: 'E', value: e },
            { label: 'F', value: f }
          ])}
        />

        <h4>Select multiple non-string values</h4>
        <select
          {...this::selectedLinkOptions(
            'custom types',
            [
              { label: 'A', value: a },
              { label: 'B', value: b },
              { label: 'C', value: c },
              { label: 'D', value: d },
              { label: 'E', value: e },
              { label: 'F', value: f }
            ],
            true
          )}
        />

        <h4>this.state</h4>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default <Example />;
