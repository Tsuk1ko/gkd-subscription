import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      desc: '点×',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout - ImageView < FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="weex_render_view"]',
          ],
          fastQuery: true,
          activityIds: ['com.taobao.weex.WXActivity'],
        },
      ],
    },
  ],
});
