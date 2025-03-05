import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

categories.forEach((category) => {
  category.enable = false;
});

const categoryNameSet = new Set(categories.map((category) => category.name));

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

apps.forEach((app) => {
  app.groups.forEach((group) => {
    const categoryOfGroup = group.name.split('-')[0];
    if (!categoryNameSet.has(categoryOfGroup)) group.enable = false;
  });
});

export default defineGkdSubscription({
  id: 973,
  name: '神代綺凛的GKD订阅',
  version: 0,
  author: '神代綺凛',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Tsuk1ko/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
