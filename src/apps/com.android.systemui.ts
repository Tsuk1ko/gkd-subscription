import { defineGkdApp } from '@gkd-kit/define';
import { ZDJL_DESC } from '../const';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 0,
      name: '自动精灵-自动允许录制权限',
      desc: `${ZDJL_DESC}；请求录制权限对话框点击“立即开始”`,
      rules: [
        {
          matches: [
            '[text*="自动精灵"][id="android:id/alertTitle"] <<n [id="android:id/parentPanel"] Button[text="立即开始"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.android.systemui.mediaprojection.permission.MediaProjectionPermissionActivity',
          ],
        },
      ],
    },
  ],
});
