/* eslint import/no-extraneous-dependencies: off */

import { transform } from '@babel/core';
import ComponentPreview from 'react-live-editor/live-compile';
import env from '@babel/preset-env';
import react from '@babel/preset-react';
import stage0 from '@babel/preset-stage-0';

const { __reactAutoBindPairs } = ComponentPreview.prototype;

function compileCode() {
  return transform(this.props.code, {
    presets: [env, [stage0, { decoratorsLegacy: true }], react]
  }).code;
}

// Overwrite compileCode method to include babel-preset-stage-0
__reactAutoBindPairs[
  __reactAutoBindPairs.indexOf('compileCode') + 1
] = compileCode;
ComponentPreview.prototype.compileCode = compileCode;
