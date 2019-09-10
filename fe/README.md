# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

### Project Tree

```$xslt
│  global.less
│  global.tsx
│  manifest.json
│  service-worker.js
│  tree.txt
│  typings.d.ts
│
├─assets
│      logo.svg
│
├─components
│  ├─Authorized
│  │      Authorized.tsx
│  │      AuthorizedRoute.tsx
│  │      CheckPermissions.tsx
│  │      index.tsx
│  │      PromiseRender.tsx
│  │      renderAuthorize.ts
│  │      Secured.tsx
│  │
│  ├─CopyBlock
│  │      index.less
│  │      index.tsx
│  │
│  ├─GlobalHeader
│  │      AvatarDropdown.tsx
│  │      index.less
│  │      NoticeIconView.tsx
│  │      RightContent.tsx
│  │
│  ├─HeaderDropdown
│  │      index.less
│  │      index.tsx
│  │
│  ├─HeaderSearch
│  │      index.less
│  │      index.tsx
│  │
│  ├─NoticeIcon
│  │      index.less
│  │      index.tsx
│  │      NoticeList.less
│  │      NoticeList.tsx
│  │
│  ├─PageLoading
│  │      index.tsx
│  │
│  ├─SelectLang
│  │      index.less
│  │      index.tsx
│  │
│  └─SettingDrawer
│          themeColorClient.ts
│
├─e2e
│  │  baseLayout.e2e.js
│  │  topMenu.e2e.js
│  │
│  └─__mocks__
│          antd-pro-merge-less.js
│
├─layouts
│      BasicLayout.tsx
│      BlankLayout.tsx
│      SecurityLayout.tsx
│      UserLayout.less
│      UserLayout.tsx
│
├─locales
│  │  en-US.ts
│  │  pt-BR.ts
│  │  zh-CN.ts
│  │  zh-TW.ts
│  │
│  ├─en-US
│  │      component.ts
│  │      globalHeader.ts
│  │      menu.ts
│  │      pwa.ts
│  │      settingDrawer.ts
│  │      settings.ts
│  │
│  ├─pt-BR
│  │      component.ts
│  │      globalHeader.ts
│  │      menu.ts
│  │      pwa.ts
│  │      settingDrawer.ts
│  │      settings.ts
│  │
│  ├─zh-CN
│  │      component.ts
│  │      globalHeader.ts
│  │      menu.ts
│  │      pwa.ts
│  │      settingDrawer.ts
│  │      settings.ts
│  │
│  └─zh-TW
│          component.ts
│          globalHeader.ts
│          menu.ts
│          pwa.ts
│          settingDrawer.ts
│          settings.ts
│
├─models
│      connect.d.ts
│      global.ts
│      login.ts
│      setting.ts
│      user.ts
│
├─pages
│  │  404.tsx
│  │  Authorized.tsx
│  │  document.ejs
│  │  Welcome.tsx
│  │
│  ├─.umi
│  │      dva.js
│  │      history.js
│  │      LocaleWrapper.jsx
│  │      polyfills.js
│  │      router.js
│  │      umi.js
│  │      umiExports.js
│  │
│  ├─dashboard
│  │  └─analysis
│  │      │  data.d.ts
│  │      │  index.tsx
│  │      │  model.tsx
│  │      │  service.tsx
│  │      │  style.less
│  │      │  _mock.ts
│  │      │
│  │      ├─components
│  │      │  │  IntroduceRow.tsx
│  │      │  │  OfflineData.tsx
│  │      │  │  ProportionSales.tsx
│  │      │  │  SalesCard.tsx
│  │      │  │  TopSearch.tsx
│  │      │  │
│  │      │  ├─Charts
│  │      │  │  │  autoHeight.tsx
│  │      │  │  │  bizcharts.d.ts
│  │      │  │  │  bizcharts.tsx
│  │      │  │  │  index.less
│  │      │  │  │  index.tsx
│  │      │  │  │
│  │      │  │  ├─Bar
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─ChartCard
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─Field
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─Gauge
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─MiniArea
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─MiniBar
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─MiniProgress
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─Pie
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─TagCloud
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  ├─TimelineChart
│  │      │  │  │      index.less
│  │      │  │  │      index.tsx
│  │      │  │  │
│  │      │  │  └─WaterWave
│  │      │  │          index.less
│  │      │  │          index.tsx
│  │      │  │
│  │      │  ├─NumberInfo
│  │      │  │      index.less
│  │      │  │      index.tsx
│  │      │  │
│  │      │  ├─PageLoading
│  │      │  │      index.tsx
│  │      │  │
│  │      │  └─Trend
│  │      │          index.less
│  │      │          index.tsx
│  │      │
│  │      ├─locales
│  │      │      en-US.ts
│  │      │      pt-BR.ts
│  │      │      zh-CN.ts
│  │      │      zh-TW.ts
│  │      │
│  │      └─utils
│  │              utils.less
│  │              utils.ts
│  │              Yuan.tsx
│  │
│  ├─list
│  │  ├─basic
│  │  │  └─list
│  │  │      │  data.d.ts
│  │  │      │  index.tsx
│  │  │      │  model.ts
│  │  │      │  service.ts
│  │  │      │  style.less
│  │  │      │  _mock.ts
│  │  │      │
│  │  │      └─utils
│  │  │              utils.less
│  │  │
│  │  ├─card
│  │  │  └─list
│  │  │      │  data.d.ts
│  │  │      │  index.tsx
│  │  │      │  model.ts
│  │  │      │  service.ts
│  │  │      │  style.less
│  │  │      │  _mock.ts
│  │  │      │
│  │  │      └─utils
│  │  │              utils.less
│  │  │
│  │  └─table
│  │      └─list
│  │          │  data.d.ts
│  │          │  index.tsx
│  │          │  model.ts
│  │          │  service.ts
│  │          │  style.less
│  │          │  _mock.ts
│  │          │
│  │          ├─components
│  │          │  │  CreateForm.tsx
│  │          │  │  UpdateForm.tsx
│  │          │  │
│  │          │  └─StandardTable
│  │          │          index.less
│  │          │          index.tsx
│  │          │
│  │          └─utils
│  │                  utils.less
│  │
│  └─user
│      └─login
│          │  index.tsx
│          │  style.less
│          │
│          ├─components
│          │  └─Login
│          │          index.less
│          │          index.tsx
│          │          LoginContext.tsx
│          │          LoginItem.tsx
│          │          LoginSubmit.tsx
│          │          LoginTab.tsx
│          │          map.tsx
│          │
│          └─locales
│                  en-US.ts
│                  zh-CN.ts
│                  zh-TW.ts
│
├─services
│      login.ts
│      user.ts
│
└─utils
        authority.test.ts
        authority.ts
        Authorized.ts
        request.ts
        utils.less
        utils.test.ts
        utils.ts
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
