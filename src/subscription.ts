import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

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
