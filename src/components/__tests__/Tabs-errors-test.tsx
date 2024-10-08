// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
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

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Tabs />', () => {
  let consoleErrorMock: any;

  function assertPropTypeWarning(message: any, nth = 1) {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(consoleErrorMock).toHaveBeenNthCalledWith(
      nth,
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect.anything(),
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect.anything(),
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect.stringMatching(message),
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect.anything(),
    );
  }

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('errors', () => {
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when tabs/panels are imbalanced and it should ignore non tab children', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div>+</div>
          </TabList>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Hello Foo</TabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Hello Bar</TabPanel>
        </Tabs>,
      );

      assertPropTypeWarning(
        "There should be an equal number of 'Tab' and 'TabPanel' in `Tabs`. Received 1 'Tab' and 2 'TabPanel'.",
        1,
      );
      assertPropTypeWarning(
        "There should be an equal number of 'Tab' and 'TabPanel' in `UncontrolledTabs`. Received 1 'Tab' and 2 'TabPanel'.",
        2,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when multiple tablist components exist', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
        </Tabs>,
      );

      assertPropTypeWarning(
        "Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.",
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when tab outside of tablist', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab>Foo</Tab>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
        </Tabs>,
      );

      assertPropTypeWarning(
        "Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.",
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when defaultIndex and selectedIndex set', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs selectedIndex={1} defaultIndex={1} onSelect={() => {}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Foo</TabPanel>
        </Tabs>,
      );

      assertPropTypeWarning(
        'The prop `selectedIndex` cannot be used together with `defaultIndex` in `Tabs`.\nEither remove `selectedIndex` to let `Tabs` handle the selected tab internally or remove `defaultIndex` to handle it yourself.',
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should throw when mode of component changes', () => {
      const onSelect = () => {};
      const { rerender } = render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs defaultIndex={1} onSelect={onSelect}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo2</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Foo</TabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Foo2</TabPanel>
        </Tabs>,
      );

      // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
      const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
      try {
        rerender(
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tabs selectedIndex={0} onSelect={onSelect}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab>Foo</Tab>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab>Foo2</Tab>
            </TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel>Foo</TabPanel>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel>Foo2</TabPanel>
          </Tabs>,
        );
      } catch (e) {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(e.message).toContain(
          'Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.',
        );
      } finally {
        consoleLogMock.mockRestore();
      }
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when tabs/panels are imbalanced', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
        </Tabs>,
      );

      assertPropTypeWarning(
        "There should be an equal number of 'Tab' and 'TabPanel' in `Tabs`. Received 1 'Tab' and 0 'TabPanel'.",
        1,
      );
      assertPropTypeWarning(
        "There should be an equal number of 'Tab' and 'TabPanel' in `UncontrolledTabs`. Received 1 'Tab' and 0 'TabPanel'.",
        2,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should result with warning when onSelect missing when selectedIndex set', () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs selectedIndex={1}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Foo</TabPanel>
        </Tabs>,
      );

      assertPropTypeWarning(
        'The prop `onSelect` is marked as required in `Tabs`, but its value is `undefined` or `null`.\n`onSelect` is required when `selectedIndex` is also set. Not doing so will make the tabs not do anything, as `selectedIndex` indicates that you want to handle the selected tab yourself.\nIf you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.',
      );
    });
  });
});
