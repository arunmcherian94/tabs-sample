// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import cx from 'clsx';

const defaultProps = {
  className: 'react-tabs__tab-list',
};
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};
const TabList = (props: any) => {
  const {
    children,
    className,
    ...attributes
  }: any = {
    ...defaultProps,
    ...props,
  };

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <ul {...attributes} className={cx(className)} role="tablist">
      {children}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </ul>
  );
};

TabList.tabsRole = 'TabList';
TabList.propTypes = propTypes;

export default TabList;
