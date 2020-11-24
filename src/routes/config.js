import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'
const menus = [
  // 菜单相关路由
  { key: '/app/dashboard/index', title: '首页', icon: <AppstoreOutlined />, component: 'Dashboard' },
  {
    key: '/app/ui',
    title: 'UI',
    icon: <ContainerOutlined />,
    subs: [
      { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
      { key: '/app/ui/icons', title: '图标', component: 'Icons' },
      { key: '/app/ui/spins', title: '加载中', component: 'Spins' },
      { key: '/app/ui/modals', title: '对话框', component: 'Modals' },
      { key: '/app/ui/notifications', title: '通知提醒框', component: 'Notifications' },
      { key: '/app/ui/tabs', title: '标签页', component: 'Tabs' },
      { key: '/app/ui/banners', title: '轮播图', component: 'Banners' },
      { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle' },
      { key: '/app/ui/drags', title: '拖拽', component: 'Drags' },
      { key: '/app/ui/gallery', title: '画廊', component: 'Gallery' },
      { key: '/app/ui/map', title: '地图', component: 'MapUi' },
    ],
  },
  {
    key: '/app/animation',
    title: '动画',
    icon: <MailOutlined />,
    subs: [
      {
        key: '/app/animation/basicAnimations',
        title: '基础动画',
        component: 'BasicAnimations',
      },
      {
        key: '/app/animation/exampleAnimations',
        title: '动画案例',
        component: 'ExampleAnimations',
      },
    ],
  },
  {
    key: '/app/table',
    title: '表格',
    icon: <PieChartOutlined />,
    subs: [
      { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable' },
      { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable' },
      {
        key: '/app/table/asynchronousTable',
        title: '异步表格',
        component: 'AsynchronousTable',
      },
    ],
  },
  {
    key: '/app/extension',
    title: '功能扩展',
    icon: <DesktopOutlined />,
    subs: [
      {
        key: '/app/extension/queryParams',
        title: '问号形式参数',
        component: 'QueryParams',
        query: '?param1=1&param2=2',
      },
      {
        key: '/app/extension/visitor',
        title: '访客模式',
        component: 'Visitor',
        login: true,
      },
      {
        key: '/app/extension/multiple',
        title: '多级菜单',
        subs: [
          {
            key: '/app/extension/multiple/child',
            title: '多级菜单子菜单',
            subs: [
              {
                key: '/app/extension/multiple/child/child',
                title: '多级菜单子子菜单',
                component: 'MultipleMenu',
              },
            ],
          },
        ],
      },
      {
        key: '/app/extension/env',
        title: '环境配置',
        component: 'Env',
      },
    ],
  }
]

export default menus
