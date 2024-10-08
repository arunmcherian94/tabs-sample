// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import cx from 'clsx';

const DEFAULT_CLASS = 'react-tabs__tab-panel';
const defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  forceRender: PropTypes.bool,
  id: PropTypes.string, // private
  selected: PropTypes.bool, // private
  selectedClassName: PropTypes.string,
};
const TabPanel = (props: any) => {
  const {
    children,
    className,
    forceRender,
    id,
    selected,
    selectedClassName,
    ...attributes
  }: any = {
    ...defaultProps,
    ...props,
  };

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div
      {...attributes}
      className={cx(className, {
        [selectedClassName]: selected,
      })}
      role="tabpanel"
      id={`panel${id}`}
      aria-labelledby={`tab${id}`}
    >
      {forceRender || selected ? children : null}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  );
};

TabPanel.tabsRole = 'TabPanel';
TabPanel.propTypes = propTypes;

export default TabPanel;
