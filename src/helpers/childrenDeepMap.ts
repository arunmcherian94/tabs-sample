// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Children, cloneElement } from 'react';
import { isTabPanel, isTab, isTabList } from './elementTypes';

function isTabChild(child: any) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

export function deepMap(children: any, callback: any) {
  return Children.map(children, (child: any) => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (
      child.props &&
      child.props.children &&
      typeof child.props.children === 'object'
    ) {
      // Clone the child that has children and map them too
      return cloneElement(child, {
        ...child.props,
        children: deepMap(child.props.children, callback),
      });
    }

    return child;
  });
}

export function deepForEach(children: any, callback: any) {
  return Children.forEach(children, (child: any) => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (
      child.props &&
      child.props.children &&
      typeof child.props.children === 'object'
    ) {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}
