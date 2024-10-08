// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import renderer from 'react-test-renderer';
// @ts-expect-error TS(6142): Module '../Tab' was resolved to '/Users/aruncheria... Remove this comment to see the full error message
import Tab from '../Tab';
import { TabWrapper } from './helpers/higherOrder';

function expectToMatchSnapshot(component: any) {
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
}

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Tab />', () => {
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
    expectToMatchSnapshot(<Tab />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should accept className', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab className="foobar" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being selected', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tab selected id="abcd">
        Hello
      </Tab>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being selected with custom class', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab selected selectedClassName="cool" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being disabled', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab disabled />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should support being disabled with custom class name', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab disabled disabledClassName="coolDisabled" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should pass through custom properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab data-tooltip="Tooltip contents" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not allow overriding all default properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    // eslint-disable-next-line jsx-a11y/aria-role
    expectToMatchSnapshot(<Tab role="micro-tab" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should allow to be wrapped in higher-order-component', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<TabWrapper />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('override the tabIndex if it was provided', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tab tabIndex="0">Hello</Tab>);
  });
});
