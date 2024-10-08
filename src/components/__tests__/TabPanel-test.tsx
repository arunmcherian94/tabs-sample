// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import renderer from 'react-test-renderer';
// @ts-expect-error TS(6142): Module '../TabPanel' was resolved to '/Users/arunc... Remove this comment to see the full error message
import TabPanel from '../TabPanel';
import { TabPanelWrapper } from './helpers/higherOrder';

function expectToMatchSnapshot(component: any) {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
}

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<TabPanel />', () => {
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
    expectToMatchSnapshot(<TabPanel>Hola</TabPanel>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render when selected', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabPanel selected>Hola</TabPanel>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render when forced', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabPanel forceRender>Hola</TabPanel>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should accept className', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabPanel className="foobar" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being selected', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel selected id="abcd">
        Hola
      </TabPanel>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being selected with custom class name', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel selected id="abcd" selectedClassName="selected">
        Hola
      </TabPanel>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass through custom properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabPanel data-tooltip="Tooltip contents" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not allow overriding all default properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    // eslint-disable-next-line jsx-a11y/aria-role
    expectToMatchSnapshot(<TabPanel role="micro-tab" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should allow for higher-order components', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabPanelWrapper />);
  });
});
