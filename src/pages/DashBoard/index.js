
import { Layout, Row, Col, Space } from 'antd'
import './index.less'
import InfoBox from './components/InfoBox'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import RaddarChart from './components/RaddarChart'
import MyCarousel from './components/MyCarousel'
import MyTable from './components/MyTable'

const info = [{
  label: '新增数据',
  info: '1000'
}, {
  label: '删除数据',
  info: '1000'
}, {
  label: '更新数据',
  info: '1000'
}, {
  label: '查询数据',
  info: '1000'
}]

const chart = {
  lineChart: {
    x: [100, 120, 161, 134, 105, 160, 165],
    y: [120, 82, 91, 154, 162, 140, 145]
  }
}

const style = { marginLeft: '0', marginRight: '0' }

const DashBoard = () => {
  return (
    <Layout className='page-container'>
      {/* 第一部分 */}
      <Row className='row-item first-part'>
        {info.map((item, index) => {
          return (
            <div className='part-one-item' key={index}>
              <InfoBox label={item.label} info={item.info} />
            </div>
          )
        })}
      </Row>
      
      {/* 第二部分 */}
      <Row className='row-item margin-top-thirty' gutter={16} style={style}>
        <Col span={8} className='part-two-item'>
          <LineChart data={chart.lineChart}/>
        </Col>
        <Col span={8} className='part-two-item'>
          <PieChart />
        </Col>
        <Col span={8} className='part-two-item'>
          <RaddarChart />
        </Col>
      </Row>

      {/* 第三部分 */}
      <Row className='row-item margin-top-thirty' gutter={16} style={style}>
        <Col span={12} className='part-three-item' style={{paddingLeft: '0'}}>
          <MyCarousel />
        </Col>
        <Col span={12} className='part-three-item' style={{paddingRight: '0'}}>
          <MyTable />
        </Col>
      </Row>
    </Layout>
  )
}

export default DashBoard