import './App.less'
import 'antd/dist/antd.less'
import './AntdFix.less'
import { Layout } from 'antd'
import HeadBar from './components/HeadBar/index'
import SideBar from './components/SideBar/index'
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Test from '@/components/Test/index'
import DashBoard from '@/pages/DashBoard'

const { Header, Sider,  Content } = Layout

function App() {
  const collapse = useSelector(state => state.SideBar.collapse)
  return (
    <Layout className='layout'>
      {/* 头部区域 */}
      <Header className='header'>
        <HeadBar></HeadBar>
      </Header>
      {/* 内容区 */}
      <Layout className='content-layout'>
        {/* 侧边导航 */}
        <Sider className='sider' collapsed={collapse}>
          <SideBar></SideBar>
        </Sider>
        {/* 实际内容 */}
        <Content className='content-container'>
          <Layout className='content-layout'>
            <Route path='/app/dashboard/index' component={DashBoard}></Route>
            <Route path='/app/ui/buttons' component={Test}></Route>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
