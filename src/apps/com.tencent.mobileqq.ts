import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '全屏广告-发现新版本弹窗',
      desc: '点击关闭按钮',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.upgrade.activity.UpgradeActivity',
          matches: [
            '[text="发现新版本"] <n * + ImageView[clickable=true][desc="关闭"]',
          ],
        },
      ],
    },
  ],
});
