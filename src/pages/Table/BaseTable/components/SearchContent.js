import { Form, Input, Button } from 'antd'

const style = {padding: '10px 5px', border: '1px solid #DCDCDC'}

const SearchContent = (props) => {
  const { getFilter } = props
  const [form] = Form.useForm()
  // 将查询条件同步至父级组件
  const submit = () => {
    getFilter(form.getFieldsValue())
  }
  return (
    <Form
      layout={'inline'}
      form={form}
      initialValues={{ layout: 'inline' }}
      style={style}
      >
      <Form.Item label="age" name='age'>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={submit}>查询</Button>
      </Form.Item>
    </Form>
  )
}

export default SearchContent