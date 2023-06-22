import React from 'react';
import { isBrowser } from '../../includes/analytics';
import ButterBar from './ButterBar';

export default function OldBrowserButterBar() {
  const isIE = isBrowser && (window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1);
  return isIE ? <ButterBar message="The browser or version you are using is unsupported. If you experience issues, please try another browser or update to the latest version. " /> : <></>;
}
