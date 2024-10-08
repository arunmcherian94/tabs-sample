import { deepForEach } from './childrenDeepMap';
import { isTab } from './elementTypes';

export function getTabsCount(children: any) {
  let tabCount = 0;
  deepForEach(children, (child: any) => {
    if (isTab(child)) tabCount++;
  });

  return tabCount;
}
