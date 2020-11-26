import React, { useEffect, useRef, useState } from 'react'
import echarts from 'echarts'
import { debounce } from 'lodash'

const LineChart = (props) => {
  const { x, y } = props.data
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
    chart.setOption({
      backgroundColor: "#fff",
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 30,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      legend: {
        data: ["expected", "actual"],
      },
      series: [
        {
          name: "expected",
          itemStyle: {
            normal: {
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            },
          },
          smooth: true,
          type: "line",
          data: x,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
        },
        {
          name: "actual",
          smooth: true,
          type: "line",
          itemStyle: {
            normal: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
          },
          data: y,
          animationDuration: 2800,
          animationEasing: "quadraticOut",
        },
      ]
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
      ref={el}
      style={{width: '100%', height: '100%'}}
    />
  )
}

export default LineChart