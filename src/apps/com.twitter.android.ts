import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X',
  groups: [
    {
      key: 0,
      name: '半屏弹窗',
      desc: '点击“暂时不用”',
      rules: [
        {
          matches: [
            '@TextView[text="暂时不用"] <<n [vid="secondary_button"] <<n [vid="half_cover_recycler_view_holder"]',
          ],
          fastQuery: true,
          activityIds: ['com.twitter.app.main.MainActivity'],
        },
      ],
    },
  ],
});
