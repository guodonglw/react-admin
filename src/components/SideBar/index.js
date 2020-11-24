import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import menus from '@/routes/config.js'

const { SubMenu } = Menu

const SideBar = () => {
	const [current, setCurrent] = useState('1')
	const [menuTreeNode, setMenuTreeNode] = useState([])
	// 菜单渲染
	const renderMenu = (data) => {
		return data.map((item)=>{
			if(item.subs){
				return <SubMenu  key={item.key} icon={item.icon} title={item.title}>
					{ renderMenu(item.subs) }
				</SubMenu>
			}
			return <Menu.Item key={item.key} icon={item.icon} title={item.title}><Link to={item.key}>{item.title}</Link></Menu.Item>
		})
	}
	// 菜单点击事件
	const handleClick = (e) => {
		console.log('click ', e)
		setCurrent(e.key)
	}
	useEffect(() => {
		setMenuTreeNode(renderMenu(menus))
	}, [])
	return (
		<Menu
			theme='dark'
			onClick={handleClick}
			defaultOpenKeys={['sub1']}
			selectedKeys={[current]}
			mode="inline">
			{menuTreeNode}
		</Menu>
	)
}

export default SideBar