import * as ReactLinkStateVM from '..';
import React from 'react';

// For LiveEditor
global.require = function (dependency) {
    switch (dependency) {
        case 'react': return React;
        case 'react-link-state-vm': return ReactLinkStateVM;
    }
}
