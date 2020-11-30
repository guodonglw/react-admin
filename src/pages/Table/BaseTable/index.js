import TableContent from './components/TableContent'
import SearchContent from './components/SearchContent'
import { Layout } from 'antd'
import { useState } from 'react'
import './index.less'

const BaseTable = () => {
  const [filter, setFilter] = useState({})
  // 获取子组件传回的查询条件
  const getFilter = (val) => {
    setFilter(val)
  }
  return (
    <Layout className='page-container'>
      {/* 查询条件区 */}
      <div className='margin-bottom-thirty search-area'>
        <SearchContent getFilter={getFilter}/>
      </div>
      
      {/* 表格内容展示区 */}
      <div>
        <TableContent filter={filter}/>
      </div>
    </Layout>
  )
}

export default BaseTable