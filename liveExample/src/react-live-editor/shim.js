import * as ReactLinkStateVM from 'react-link-state-vm';
import React from 'react';

// For LiveEditor
global.require = dependency =>
  ({
    react: React,
    'react-link-state-vm': ReactLinkStateVM
  }[dependency]);
