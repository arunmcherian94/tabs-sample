// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
// @ts-expect-error TS(6142): Module '../Tab' was resolved to '/Users/aruncheria... Remove this comment to see the full error message
import Tab from '../Tab';
// @ts-expect-error TS(6142): Module '../TabList' was resolved to '/Users/arunch... Remove this comment to see the full error message
import TabList from '../TabList';
// @ts-expect-error TS(6142): Module '../TabPanel' was resolved to '/Users/arunc... Remove this comment to see the full error message
import TabPanel from '../TabPanel';
// @ts-expect-error TS(6142): Module '../Tabs' was resolved to '/Users/aruncheri... Remove this comment to see the full error message
import Tabs from '../Tabs';
import {
  TabListWrapper,
  TabWrapper,
  TabPanelWrapper,
} from './helpers/higherOrder';

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
  expect(render(component).container.firstChild).toMatchSnapshot();
}

function createTabs(props = {}) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tabs {...props}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tab data-testid="tab1">Tab1</Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tab data-testid="tab2">Tab2</Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tab data-testid="tab3">
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <a href="a">Tab3</a>
        </Tab>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tab data-testid="tab4" disabled>
          Tab4
        </Tab>
      </TabList>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel data-testid="panel1">Hello Tab1</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel data-testid="panel3">Hello Tab3</TabPanel>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TabPanel data-testid="panel4">Hello Tab4</TabPanel>
    </Tabs>
  );
}

function assertTabSelected(tabNo: any, node = screen) {
  const tab = node.getByTestId(`tab${tabNo}`);
  const panel = node.getByTestId(`panel${tabNo}`);

  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(tab).toHaveAttribute('aria-selected', 'true');
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(panel).toHaveTextContent(`Hello Tab${tabNo}`);
}

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('<Tabs />', () => {
  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('props', () => {
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should have sane defaults', () => {
      expectToMatchSnapshot(createTabs());
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should honor positive defaultIndex prop', () => {
      expectToMatchSnapshot(createTabs({ defaultIndex: 1 }));
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should honor negative defaultIndex prop', () => {
      expectToMatchSnapshot(createTabs({ defaultIndex: -1 }));
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should call onSelect when selection changes', async () => {
      const called = { index: -1, last: -1 };
      render(
        createTabs({
          onSelect(index: any, last: any) {
            called.index = index;
            called.last = last;
          },
        }),
      );

      await userEvent.click(screen.getByTestId('tab2'));

      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(called.index).toBe(1);
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(called.last).toBe(0);
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should accept className', () => {
      expectToMatchSnapshot(createTabs({ className: 'foobar' }));
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should accept domRef', () => {
      let domNode;
      render(
        createTabs({
          domRef: (node: any) => {
            domNode = node;
          },
        }),
      );

      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(domNode).not.toBeUndefined();
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(domNode.className).toBe('react-tabs');
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('interaction', () => {
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('mouse', () => {
      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should update selectedIndex when clicked', async () => {
        render(createTabs());
        await userEvent.click(screen.getByTestId('tab2'));

        assertTabSelected(2);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should update selectedIndex when tab child is clicked', async () => {
        render(createTabs());
        await userEvent.click(screen.getByTestId('tab3'));

        assertTabSelected(3);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should not change selectedIndex when clicking a disabled tab', async () => {
        render(createTabs({ defaultIndex: 0 }));
        await userEvent.click(screen.getByTestId('tab4'));

        assertTabSelected(1);
      });
    });

    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('keyboard', () => {
      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should change focus on tab and tabindex set', async () => {
        render(
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tabs>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab1" tabIndex="0">
                Tab1
              </Tab>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab2" tabIndex="0">
                Tab2
              </Tab>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab3" tabIndex="0">
                Tab3
              </Tab>
            </TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel1">Hello Tab1</TabPanel>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel3">Hello Tab3</TabPanel>
          </Tabs>,
        );
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);

        assertTabSelected(1);

        await userEvent.keyboard('[Tab]');
        await userEvent.keyboard('[Enter]');

        assertTabSelected(2);

        await userEvent.keyboard('[Tab]');
        await userEvent.keyboard('[Space]');

        assertTabSelected(3);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should update selectedIndex when arrow right key pressed', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);
        await userEvent.type(element, '[ArrowRight]');

        assertTabSelected(2);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should overflow when arrow right key pressed and no right tab available', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab3');
        await userEvent.click(element);
        await userEvent.type(element, '[ArrowRight]');

        assertTabSelected(1);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should not do anything when arrow right key pressed and no other tab available', async () => {
        render(
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tabs>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab1">Tab1</Tab>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab2" disabled>
                Tab2
              </Tab>
            </TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel1">Hello Tab1</TabPanel>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
          </Tabs>,
        );
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);
        await userEvent.keyboard('[ArrowRight]');

        assertTabSelected(1);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should overflow when arrow left key pressed and no left tab available', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);
        await userEvent.keyboard('[ArrowLeft]');

        assertTabSelected(3);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should not do anything when arrow left key pressed and no other tab available', async () => {
        render(
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tabs>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab1" disabled>
                Tab1
              </Tab>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tab data-testid="tab2">Tab2</Tab>
            </TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel1">Hello Tab1</TabPanel>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
          </Tabs>,
        );
        const element = screen.getByTestId('tab2');
        await userEvent.click(element);
        await userEvent.keyboard('[ArrowLeft]');

        assertTabSelected(2);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should move to first tab on home key', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab3');
        await userEvent.click(element);
        await userEvent.type(element, '[Home]');

        assertTabSelected(1);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should move to first tab on end key', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);
        await userEvent.type(element, '[End]');

        assertTabSelected(3);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should update selectedIndex when arrow left key pressed (RTL)', async () => {
        render(createTabs({ direction: 'rtl' }));
        const element = screen.getByTestId('tab1');
        await userEvent.click(element);
        await userEvent.type(element, '[ArrowLeft]');

        assertTabSelected(2);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should update selectedIndex when arrow right key pressed (RTL)', async () => {
        render(createTabs({ direction: 'rtl' }));
        const element = screen.getByTestId('tab2');
        await userEvent.click(element);
        await userEvent.type(element, '[ArrowRight]');

        assertTabSelected(1);
      });

      // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should not change selectedIndex when arrow left key pressed on a disabled tab', async () => {
        render(createTabs());
        const element = screen.getByTestId('tab4');
        await userEvent.click(element);
        await userEvent.type(element, '[ArrowLeft]');

        assertTabSelected(1);
      });
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('performance', () => {
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should only render the selected tab panel', async () => {
      render(createTabs());
      const tabPanels = screen.getAllByRole('tabpanel');

      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[0]).toHaveTextContent('Hello Tab1');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[1]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[2]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[3]).toHaveTextContent('');

      await userEvent.click(screen.getByTestId('tab2'));

      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[0]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[1]).toHaveTextContent('Hello Tab2');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[2]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[3]).toHaveTextContent('');

      await userEvent.click(screen.getByTestId('tab3'));

      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[0]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[1]).toHaveTextContent('');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[2]).toHaveTextContent('Hello Tab3');
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(tabPanels[3]).toHaveTextContent('');
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should render all tabs if forceRenderTabPanel is true', () => {
      expectToMatchSnapshot(createTabs({ forceRenderTabPanel: true }));
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('validation', () => {
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should allow random order for elements', () => {
      expectToMatchSnapshot(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs forceRenderTabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Hello Foo</TabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Foo</Tab>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Bar</Tab>
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Hello Bar</TabPanel>
        </Tabs>,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should not throw a warning when wrong element is found', () => {
      expectToMatchSnapshot(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab />
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div />
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
        </Tabs>,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should be okay with rendering without any children', () => {
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expectToMatchSnapshot(<Tabs />);
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should be okay with rendering just TabList', () => {
      expectToMatchSnapshot(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList />
        </Tabs>,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should gracefully render null', () => {
      expectToMatchSnapshot(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab>Tab A</Tab>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {false && <Tab>Tab B</Tab>}
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel>Content A</TabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {false && <TabPanel>Content B</TabPanel>}
        </Tabs>,
      );
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should support nested tabs', async () => {
      render(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs data-testid="first">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab data-testid="tab1" />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tab />
          </TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel data-testid="panel1">
            Hello Tab1
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Tabs data-testid="second">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabList>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tab />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tab data-testid="tab2" />
              </TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabPanel />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
            </Tabs>
          </TabPanel>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TabPanel />
        </Tabs>,
      );

      await userEvent.click(
        within(screen.getByTestId('second')).getByTestId('tab2'),
      );

      assertTabSelected(1);
      // @ts-expect-error TS(2345): Argument of type '{ getByLabelText<T extends HTMLE... Remove this comment to see the full error message
      assertTabSelected(2, within(screen.getByTestId('second')));
    });

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should allow other DOM nodes', () => {
      expectToMatchSnapshot(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div id="tabs-nav-wrapper">
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button type="button">Left</button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div className="tabs-container">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <TabList>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tab />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tab />
              </TabList>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            </div>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <button type="button">Right</button>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          </div>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <div className="tab-panels">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TabPanel />
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          </div>
        </Tabs>,
      );
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should pass through custom properties', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tabs data-tooltip="Tooltip contents" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not add known props to dom', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expectToMatchSnapshot(<Tabs defaultIndex={3} />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should cancel if event handler returns false', async () => {
    render(createTabs({ onSelect: () => false }));

    assertTabSelected(1);

    await userEvent.click(screen.getByTestId('tab2'));
    assertTabSelected(1);

    await userEvent.click(screen.getByTestId('tab3'));
    assertTabSelected(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should trigger onSelect handler when clicking', async () => {
    let wasClicked = false;
    render(
      createTabs({
        onSelect: () => {
          wasClicked = true;
        },
      }),
    );

    assertTabSelected(1);

    await userEvent.click(screen.getByTestId('tab2'));
    assertTabSelected(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wasClicked).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should trigger onSelect handler when clicking on open tab', async () => {
    let wasClicked = false;
    render(
      createTabs({
        onSelect: () => {
          wasClicked = true;
        },
      }),
    );

    assertTabSelected(1);

    await userEvent.click(screen.getByTestId('tab1'));
    assertTabSelected(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wasClicked).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should switch tabs if setState is called within onSelect', async () => {
    class Wrap extends React.Component {
      setState: any;
      state = {};

      handleSelect = () => this.setState({ foo: 'bar' });

      render() {
        // @ts-expect-error TS(2339): Property 'foo' does not exist on type '{}'.
        const { foo } = this.state;
        return createTabs({
          onSelect: this.handleSelect,
          className: foo,
        });
      }
    }

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    render(<Wrap />);

    await userEvent.click(screen.getByTestId('tab2'));
    assertTabSelected(2);

    await userEvent.click(screen.getByTestId('tab3'));
    assertTabSelected(3);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should allow for higher order components', () => {
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
        <TabPanelWrapper>Foo</TabPanelWrapper>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanelWrapper>Bar</TabPanelWrapper>
      </Tabs>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should allow string children', () => {
    expectToMatchSnapshot(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs>
        Foo
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabList>
          Foo
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab>Foo</Tab>
          Foo
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab>Bar</Tab>
          Foo
        </TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Bar</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel>Foo</TabPanel>
        Foo
      </Tabs>,
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should change tabs when arrow up/down is pressed', async () => {
    render(createTabs());
    const firstTab = screen.getByTestId('tab1');
    const secondTab = screen.getByTestId('tab2');

    await userEvent.tab();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);

    await userEvent.type(firstTab, '[ArrowDown]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(secondTab).toHaveFocus();
    assertTabSelected(2);

    await userEvent.type(secondTab, '[ArrowUp]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not focus tabs if focusTabOnClick is false', async () => {
    render(createTabs({ focusTabOnClick: false }));
    const firstTab = screen.getByTestId('tab1');
    const secondTab = screen.getByTestId('tab2');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).not.toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(secondTab).not.toHaveFocus();
    assertTabSelected(1);

    await userEvent.click(secondTab);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).not.toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(secondTab).not.toHaveFocus();
    assertTabSelected(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not focus tab again on rerender', async () => {
    const { rerender } = render(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input data-testid="input1" />
        {createTabs()}
      </>,
    );
    const firstTab = screen.getByTestId('tab1');
    const inputField = screen.getByTestId('input1');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).not.toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(inputField).not.toHaveFocus();

    await userEvent.click(firstTab);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(inputField).not.toHaveFocus();

    await userEvent.click(inputField);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).not.toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(inputField).toHaveFocus();

    rerender(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input data-testid="input1" />
        {createTabs()}
      </>,
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).not.toHaveFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(inputField).toHaveFocus();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not change tabs when arrow up/down is pressed and disableUpDownKeys is passed', async () => {
    render(
      createTabs({
        disableUpDownKeys: true,
      }),
    );
    const firstTab = screen.getByTestId('tab1');

    await userEvent.tab();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);

    await userEvent.type(firstTab, '[ArrowDown]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);

    await userEvent.type(firstTab, '[ArrowUp]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not change tabs when arrow left/right is pressed and disableLeftRightKeys is passed', async () => {
    render(
      createTabs({
        disableLeftRightKeys: true,
      }),
    );
    const firstTab = screen.getByTestId('tab1');

    await userEvent.tab();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);

    await userEvent.type(firstTab, '[ArrowLeft]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);

    await userEvent.type(firstTab, '[ArrowRight]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(firstTab).toHaveFocus();
    assertTabSelected(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render first tab once tabs are available', () => {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { rerender } = render(<Tabs></Tabs>);

    rerender(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tabs>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabList>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab data-testid="tab1">Tab1</Tab>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tab data-testid="tab2">Tab2</Tab>
        </TabList>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel data-testid="panel1">Hello Tab1</TabPanel>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TabPanel data-testid="panel2">Hello Tab2</TabPanel>
      </Tabs>,
    );

    assertTabSelected(1);
  });
});
