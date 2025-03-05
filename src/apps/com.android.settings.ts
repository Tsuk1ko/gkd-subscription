import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 0,
      name: '自动精灵-自动开启无障碍',
      desc: '请在“规则类别”中启用“自动精灵”来使用；需要手动滑动到自动精灵出现',
      rules: [
        {
          key: 0,
          matches: [
            '[id="android:id/summary"][text="已关闭"] - [id="android:id/title"][text="自动精灵"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.android.settings.Settings$AccessibilitySettingsActivity',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="使用“自动精灵”"] + [checked=false][vid="switch_widget"]',
          ],
          fastQuery: true,
          activityIds: ['com.android.settings.SubSettings'],
        },
        {
          key: 2,
          preKeys: [1],
          matches: [
            '[id="android:id/accessibility_permission_enable_allow_button"]',
          ],
          fastQuery: true,
          activityIds: ['com.android.settings.SubSettings'],
        },
      ],
    },
  ],
});
