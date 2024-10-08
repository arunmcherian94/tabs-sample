import { Tab, Tabs, TabList, TabPanel } from '../index';
// @ts-expect-error TS(6142): Module '../components/Tab' was resolved to '/Users... Remove this comment to see the full error message
import TabComponent from '../components/Tab';
// @ts-expect-error TS(6142): Module '../components/TabList' was resolved to '/U... Remove this comment to see the full error message
import TabListComponent from '../components/TabList';
// @ts-expect-error TS(6142): Module '../components/Tabs' was resolved to '/User... Remove this comment to see the full error message
import TabsComponent from '../components/Tabs';
// @ts-expect-error TS(6142): Module '../components/TabPanel' was resolved to '/... Remove this comment to see the full error message
import TabPanelComponent from '../components/TabPanel';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('index.js', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should correctly export all component as named export', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Tab).toEqual(TabComponent);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(TabList).toEqual(TabListComponent);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Tabs).toEqual(TabsComponent);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(TabPanel).toEqual(TabPanelComponent);
  });
});
