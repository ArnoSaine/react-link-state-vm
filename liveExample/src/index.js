/* eslint import/first: off */
/* global preval */

import './react-live-editor';
import ReactLiveEditor from 'react-live-editor';
import { render } from 'react-dom';
import GithubCorner from 'react-github-corner';

const { LiveEditor } = ReactLiveEditor;

render(
  <>
    <LiveEditor
      codeText={preval`
      const fs = require('fs')
      module.exports = fs.readFileSync(require.resolve('./example.js'), 'utf8')
`}
    />
    <GithubCorner
      href="https://github.com/ArnoSaine/react-link-state-vm"
      octoColor="#77e208"
      bannerColor="#0da31a"
    />
  </>,
  document.getElementById('root')
);
