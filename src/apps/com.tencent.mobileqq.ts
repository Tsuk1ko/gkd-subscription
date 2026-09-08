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
    {
      key: 1,
      name: '功能类-表情面板自动切换至收藏表情',
      desc: '打开表情面板时自动点击收藏表情Tab',
      fastQuery: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '记录表情面板已收起',
          action: 'none',
          matches: '[vid="tab_sencondary_emoticon"][visibleToUser=false]',
        },
        {
          key: 1,
          name: '点击收藏表情Tab',
          preKeys: [0],
          matches:
            '@LinearLayout[desc="收藏表情面板"][visibleToUser=true] <n [vid="tab_sencondary_emoticon"][visibleToUser=true]',
        },
      ],
    },
  ],
});
