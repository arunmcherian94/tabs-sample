// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'hois... Remove this comment to see the full error message
import hoist from 'hoist-non-react-statics';
// @ts-expect-error TS(6142): Module '../../../TabList' was resolved to '/Users/... Remove this comment to see the full error message
import TabList from '../../../TabList';

function TabListWrapper(props: any) {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TabList {...props} />;
}

export default hoist(TabListWrapper, TabList);
