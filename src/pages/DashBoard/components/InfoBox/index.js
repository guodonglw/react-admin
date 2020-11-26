import { Layout } from 'antd'
import './index.less'

const InfoBox = (props) => {
  const {label, info} = props
  return (
    <Layout className='info-box'>
      <span className='label'>{label}</span>
      <span className='info'>{info}</span>
    </Layout>
  )
}

export default InfoBox