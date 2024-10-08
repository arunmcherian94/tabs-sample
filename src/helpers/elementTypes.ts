function makeTypeChecker(tabsRole: any) {
  return (element: any) => !!element.type && element.type.tabsRole === tabsRole;
}

export const isTab = makeTypeChecker('Tab');
export const isTabList = makeTypeChecker('TabList');
export const isTabPanel = makeTypeChecker('TabPanel');
