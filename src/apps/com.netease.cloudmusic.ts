import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '全屏广告-附近设备授权提示',
      desc: '点击“不同意”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: [
            '[vid="permissionReject"]',
            '[text="附近设备授权提示"]',
            '[vid="permissionReject"]',
          ],
        },
      ],
    },
  ],
});
