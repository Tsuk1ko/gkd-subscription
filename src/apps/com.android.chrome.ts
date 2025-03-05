import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.chrome',
  name: 'Chrome',
  groups: [
    {
      key: 0,
      name: '功能类-自动打开新标签页',
      desc: '标签组空白页点击左上角+',
      rules: [
        {
          matches: [
            '@[vid="toolbar_action_button"] <<n [vid="tab_switcher_view_holder"] [vid="empty_state_icon"]',
          ],
          activityIds: ['org.chromium.chrome.browser.ChromeTabbedActivity'],
        },
      ],
    },
  ],
});
