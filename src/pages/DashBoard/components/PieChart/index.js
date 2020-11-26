import { useEffect, useRef, useState } from 'react'
import echarts from 'echarts'
import { debounce } from 'lodash'

const PieChart = () => {
  const el = useRef(null)
  const [chart, setChart] = useState('')
  // 重新渲染事件
  const resize = () => {
    if (chart) {
      debounce(chart.resize, 300)()
    }
  }
  // 绘制chart
  const setOption = () => {
    const animationDuration = 3000
    chart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
      },
      calculable: true,
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { value: 320, name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" },
          ],
          animationEasing: "cubicInOut",
          animationDuration
        },
      ],
    })
  }
  useEffect(() => {
    el.current && setChart(echarts.init(el.current))
    if (chart) {
      setOption()
      resize()
    }
    window.addEventListener('resize', resize)
    return () => {
      // 销毁时执行
      chart && chart.dispose()
    }
  }, [el, chart])
  return (
    <div
      className='chart'
      ref={el}
      style={{width: '100%', height: '100%'}}
    />
  )
}

export default PieChart