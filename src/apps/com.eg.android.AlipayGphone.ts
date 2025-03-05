import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '半屏弹窗-花呗',
      desc: '点击“不感兴趣”',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="可享「花呗」先用后还服务"] <<n [id="com.alipay.android.app:id/flybird_layout"]',
            '[text="不感兴趣"]',
          ],
        },
      ],
    },
  ],
});
