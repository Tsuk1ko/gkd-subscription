import { defineGkdApp } from '@gkd-kit/define';
import { ZDJL_DESC } from '../const';

export default defineGkdApp({
  id: 'com.zdanjian.zdanjian',
  name: '自动精灵',
  groups: [
    {
      key: 0,
      name: '自动精灵-无障碍提示',
      desc: `${ZDJL_DESC}；无障碍提示对话框自动点击`,
      rules: [
        {
          matches: [
            'TextView[text*="无障碍"] <<n [vid="Dialog.RootView"] [vid="Dialog.BtnOk"]',
          ],
          fastQuery: true,
          activityIds: ['com.zdanjian.zdanjian.activities.home.HomeActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '自动精灵-选择运行模式',
      desc: `${ZDJL_DESC}；选择运行模式对话框自动确认`,
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '@[vid="main_tab_layout"] <<n LinearLayout + [id="android:id/statusBarBackground"][visibleToUser=true]',
          ],
          activityIds: ['com.zdanjian.zdanjian.activities.home.HomeActivity'],
        },
      ],
    },
  ],
});
