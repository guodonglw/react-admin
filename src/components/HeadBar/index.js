import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { sidebarCollapseCreator } from '@/redux/SideBar.js'
import { updateName } from '@/redux/App.js'
import './index.less'
import { Avatar, Popover } from 'antd'

const HeadBar = () => {
  const collapse = useSelector(state => state.SideBar.collapse)
  const name = useSelector(state => state.App.name)
  const dispatch = useDispatch()
  // 折叠侧边栏
  const toggle = () => {
    dispatch(sidebarCollapseCreator())
  }
  // 修改名称
  const changeName = () => {
    dispatch(updateName('哈哈哈'))
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

export default HeadBar