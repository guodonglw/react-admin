import { Table, Tag, Space } from 'antd'
import { useState } from 'react'

const data = [
  {
    key: '1',
    name: 'John',
    address: 'New York',
    tags: ['developer'],
  },
  {
    key: '2',
    name: 'Jim',
    address: 'London',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe',
    address: 'Sidney',
    tags: ['teacher'],
  },
]

const MyTable = () => {
  const [tableData, setTableData] = useState([...data])
  // 删除功能
  const deleteRow = (record) => {
    setTableData(tableData.filter(item => item.key !== record.key))
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a onClick={ () => deleteRow(record)}>Delete</a>
        </Space>
      ),
    }
  ]
  return (
    <div>
      <Table columns={columns} dataSource={tableData} pagination={false}/>
    </div>
  )
}

export default MyTable