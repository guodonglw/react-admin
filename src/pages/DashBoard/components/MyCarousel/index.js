import { Carousel } from 'antd'
import img1 from '@/assets/imgs/1.jpg'
import img2 from '@/assets/imgs/2.jpg'
import img3 from '@/assets/imgs/3.jpg'
import img4 from '@/assets/imgs/4.jpg'

const contentStyle = {
  height: '300px',
  width: '100%'
}

const imgArr = [img1, img2, img3, img4]

const MyCarousel = () => {
  return (
    <Carousel autoplay>
      {imgArr.map((item, index) => {
        return (
          <div key={index}>
            <img src={item} style={contentStyle}/>
          </div>
        )
      })}
    </Carousel>
  )
}

export default MyCarousel