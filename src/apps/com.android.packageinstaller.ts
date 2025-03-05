import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 0,
      name: '功能类-自动安装',
      desc: '自动点击“安装”和“完成”，仅适配我个人的系统，不一定有效',
      rules: [
        {
          matches: ['[vid="ok_button"]'],
          fastQuery: true,
          activityIds: [
            'com.android.packageinstaller.PackageInstallerActivity',
          ],
        },
        {
          matches: ['[vid="done_button"]'],
          fastQuery: true,
          activityIds: ['com.android.packageinstaller.InstallSuccess'],
        },
      ],
    },
  ],
});
