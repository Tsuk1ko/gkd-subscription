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
          actionCd: 3000,
          action: 'none',
          matches: '[vid="container_secondary_tab"][visibleToUser=false]',
        },
        {
          key: 1,
          name: '点击收藏表情Tab',
          preKeys: [0],
          matches:
            '@LinearLayout[desc="收藏表情面板"][visibleToUser=true] <n [vid="tab_sencondary_emoticon"][visibleToUser=true]',
        },
        {
          key: 2,
          name: '[兜底]点击收藏表情Tab',
          actionMaximum: 1,
          resetMatch: 'activity',
          matches:
            '@LinearLayout[desc="收藏表情面板"][visibleToUser=true] <n [vid="tab_sencondary_emoticon"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动从内置浏览器B站页面跳转至APP',
      desc: '在内置浏览器打开B站视频时点击浏览方式的“打开”和应用宝页面的“打开”',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules: [
        {
          key: 0,
          name: '点击浏览方式的“打开”',
          forcedTime: 3000,
          matches:
            'TextView[text="你感兴趣的视频都在B站"] + View > TextView[text="打开"]',
        },
        {
          key: 1,
          name: '点击应用宝页面的“打开”',
          preKeys: [0],
          forcedTime: 3000,
          action: 'clickCenter',
          matches: '[id="btn-normal-download"][desc="打开"]',
        },
      ],
    },
  ],
});
