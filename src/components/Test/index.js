const Test = () => {
  const arr = new Array(10).fill(1)
  return (
    <div>
      {arr.map((item, index) => {
        return <div key={index}>这是一个测试{index}</div>
      })} 
    </div>
  )
}

export default Test