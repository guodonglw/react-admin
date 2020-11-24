import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import store from '@/redux/store.js'
import React from 'react'
import {connect} from 'react-redux'
import { sidebarCollapseCreator } from '@/redux/SideBar.js'
import { updateName } from '@/redux/App.js'
import './index.less'
import { Avatar, Popover } from 'antd'

const HeadBar = (props) => {
  const {collapse, name} = props
  // 折叠侧边栏
  const toggle = () => {
    store.dispatch(sidebarCollapseCreator())
  }
  // 修改名称
  const changeName = () => {
    store.dispatch(updateName('哈哈哈'))
  }
  return (
    <div className='head-container'>
      <section className={collapse ? 'front-collapse' : 'front'}>
        <img
          alt='logo'
          src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          style={{width: '32px'}} />
        {!collapse ? <span style={{marginLeft: '10px'}}>后台系统</span> : ''} 
      </section>

      <section className='middle'>
        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
      </section>

      <section className='end'>
        <span>{name}</span>
        <Popover content={
          <div>
            <a onClick={changeName}>点我试试</a>
          </div>
        }>
          <Avatar style={{marginLeft: '5px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Popover>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.SideBar,
    ...state.App
  }
}

export default connect(mapStateToProps)(HeadBar)