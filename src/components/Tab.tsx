// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect, useRef } from 'react';
import cx from 'clsx';

const DEFAULT_CLASS = 'react-tabs__tab';
const defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: `${DEFAULT_CLASS}--disabled`,
  focus: false,
  id: null,
  selected: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  focus: PropTypes.bool, // private
  id: PropTypes.string, // private
  selected: PropTypes.bool, // private
  selectedClassName: PropTypes.string,
  tabIndex: PropTypes.string,
  tabRef: PropTypes.func, // private
};

const Tab = (props: any) => {
  let nodeRef = useRef();
  const {
    children,
    className,
    disabled,
    disabledClassName,
    focus,
    id,
    selected,
    selectedClassName,
    tabIndex,
    tabRef,
    ...attributes
  }: any = {
    ...defaultProps,
    ...props,
  };

  useEffect(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <li
      {...attributes}
      className={cx(className, {
        [selectedClassName]: selected,
        [disabledClassName]: disabled,
      })}
      ref={(node: any) => {
        nodeRef.current = node;
        if (tabRef) tabRef(node);
      }}
      role="tab"
      id={`tab${id}`}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={`panel${id}`}
      tabIndex={tabIndex || (selected ? '0' : null)}
      data-rttab
    >
      {children}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </li>
  );
};

Tab.propTypes = propTypes;
Tab.tabsRole = 'Tab';

export default Tab;
