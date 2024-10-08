// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import renderer from 'react-test-renderer';
// @ts-expect-error TS(6142): Module '../Tab' was resolved to '/Users/aruncheria... Remove this comment to see the full error message
import Tab from '../Tab';
// @ts-expect-error TS(6142): Module '../TabList' was resolved to '/Users/arunch... Remove this comment to see the full error message
import TabList from '../TabList';
// @ts-expect-error TS(6142): Module '../TabPanel' was resolved to '/Users/arunc... Remove this comment to see the full error message
import TabPanel from '../TabPanel';
// @ts-expect-error TS(6142): Module '../Tabs' was resolved to '/Users/aruncheri... Remove this comment to see the full error message
import Tabs from '../Tabs';
import { TabListWrapper, TabWrapper } from './helpers/higherOrder';

// @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
jest.mock('react', () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const originalModule = jest.requireActual('react');

  return {
    ...originalModule,
    useId: () => ':r0:',
  };
});

function expectToMatchSnapshot(component: any) {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
}

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<TabList />', () => {
  // @ts-expect-error TS(2304): Cannot find name 'beforeAll'.
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = (error) => {
      throw new Error(error);
    };
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should have sane defaults', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabList />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should accept className', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabList className="foobar" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass through custom properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabList data-tooltip="Tooltip contents" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not allow overriding all default properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    // eslint-disable-next-line jsx-a11y/aria-role
    expectToMatchSnapshot(<TabList role="micro-tab" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should retain the default classnames for active and disabled tab', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs defaultIndex={0}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab>Foo</Tab>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab disabled>Bar</Tab>
        </TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Foo</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Bar</TabPanel>
      </Tabs>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should display the custom classnames for selected and disabled tab specified on tabs', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs
        defaultIndex={0}
        selectedTabClassName="active"
        disabledTabClassName="disabled"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab>Foo</Tab>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab disabled>Bar</Tab>
        </TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Foo</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Bar</TabPanel>
      </Tabs>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should display the custom classnames for selected and disabled tab', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs defaultIndex={0}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab selectedClassName="active" disabledClassName="disabled">
            Foo
          </Tab>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab disabled selectedClassName="active" disabledClassName="disabled">
            Bar
          </Tab>
        </TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Foo</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Bar</TabPanel>
      </Tabs>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should allow for higher order components', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabListWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabWrapper>Foo</TabWrapper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabWrapper>Bar</TabWrapper>
        </TabListWrapper>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Foo</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Bar</TabPanel>
      </Tabs>,
    );
  });
});
