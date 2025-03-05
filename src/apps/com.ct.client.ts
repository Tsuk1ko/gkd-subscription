import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '半屏弹窗',
      desc: '点击“暂不”',
      rules: [
        {
          matches: ['[vid="tv_deny"][text="暂不"]'],
          fastQuery: true,
          activityIds: ['com.ct.client.activity.MainActivity'],
        },
      ],
    },
  ],
});
