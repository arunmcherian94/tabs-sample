/**
 * @jest-environment node
 */
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(6142): Module '../Tab' was resolved to '/Users/aruncheria... Remove this comment to see the full error message
import Tab from '../Tab';
// @ts-expect-error TS(6142): Module '../TabList' was resolved to '/Users/arunch... Remove this comment to see the full error message
import TabList from '../TabList';
// @ts-expect-error TS(6142): Module '../TabPanel' was resolved to '/Users/arunc... Remove this comment to see the full error message
import TabPanel from '../TabPanel';
// @ts-expect-error TS(6142): Module '../Tabs' was resolved to '/Users/aruncheri... Remove this comment to see the full error message
import Tabs from '../Tabs';

// @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
jest.mock('react', () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const originalModule = jest.requireActual('react');

  return {
    ...originalModule,
    useId: () => ':r0:',
  };
});

function createTabs(props = {}) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tabs {...props}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Tab>Foo</Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Tab>Bar</Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Tab>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
          because no i... Remove this comment to see the full error message
          <a href="a">Baz</a>
        </Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Tab disabled>Qux</Tab>
      </TabList>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <TabPanel>Hello Foo</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <TabPanel>Hello Bar</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <TabPanel>Hello Baz</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <TabPanel>Hello Qux</TabPanel>
    </Tabs>
  );
}

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ServerSide <Tabs />', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('does not crash in node environments', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(() => createTabs()).not.toThrow();
  });
});
