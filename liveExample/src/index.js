/* eslint import/first: off */

import './react-live-editor';
import ReactLiveEditor from 'react-live-editor';
import { render } from 'react-dom';

const { LiveEditor } = ReactLiveEditor;

render(
  <LiveEditor
    codeText={`import React, { Component } from 'react';
    import { checkedLink, selectedLink, valueLink } from 'react-link-state-vm';

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

            <a href="https://github.com/ArnoSaine/react-link-state-vm">
              <img
                style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
                src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                alt="Fork me on GitHub"
                data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
              />
            </a>
          </div>
        );
      }
    }

    export default <Example />;
`}
  />,
  document.getElementById('root')
);
