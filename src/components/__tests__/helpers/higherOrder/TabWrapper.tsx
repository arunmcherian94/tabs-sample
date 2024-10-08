// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'hois... Remove this comment to see the full error message
import hoist from 'hoist-non-react-statics';
// @ts-expect-error TS(6142): Module '../../../Tab' was resolved to '/Users/arun... Remove this comment to see the full error message
import Tab from '../../../Tab';

function TabWrapper(props: any) {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Tab {...props} />;
}

export default hoist(TabWrapper, Tab);
