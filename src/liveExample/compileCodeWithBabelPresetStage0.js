import {transform} from 'babel-core';
import ComponentPreview from 'react-live-editor/live-compile';
import es2015 from 'babel-preset-es2015';
import stage0 from 'babel-preset-stage-0';
import react from 'babel-preset-react';

const {__reactAutoBindPairs} = ComponentPreview.prototype;

// Overwrite compileCode method to include babel-preset-stage-0
__reactAutoBindPairs[__reactAutoBindPairs.indexOf('compileCode') + 1] = ComponentPreview.prototype.compileCode = function () {
    return transform(
        this.props.code,
        {
            presets: [es2015, stage0, react]
        }
    ).code;
}
