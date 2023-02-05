import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './feature.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {HiOutlineArrowNarrowLeft ,HiOutlineArrowNarrowRight} from 'react-icons/hi'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
 {
    id : 1 ,
    title : "ICEWAYS",
    content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'

 } ,
 {
    id : 2 ,
    title : "ICEWAYS",
    content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'

 },
 {
    id : 3 ,
    title : "ICEWAYS",
    content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'

 },
 {
    id : 4 ,
    title : "ICEWAYS",
    content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'

 } ,
 {
    id : 5 ,
    title : "ICEWAYS",
    content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'

 } ,
{
   
        id : 6,
        title : "ICEWAYS",
        content : 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'
    
     
}


]

const Feature = () => {
  return (
      <div className='feature-container'>
     <div className='feature-wrapper'>
      <h2 className='feature-title'>Featured Products</h2>
      <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={24}
      slidesPerView={3}
      navigation= {{
         nextEl: '.button-next-slide',
         prevEl : '.button-prev-slide',
      }}
      breakpoints={{
    // when window width is >= 640px
   0: {
      slidesPerView: 1,
    },
    950 : {
      slidesPerView :3,
    }
  
  }}

      pagination={{
          clickable: true,
          dynamicBullets :true ,
           
          }}
     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
    {data.map(data  => (
      <div className='swiper-container'>
        <SwiperSlide   key={data.id} className="slider-card">
        <div className='card-title'>
            {data.title}
        </div>
        <div className='card-content'>
            {data.content}
        </div>
        <div className='buttons'>
        <button className='button1' >Learn More</button>
        <button className='button2' >Find Dealer</button>
        </div>      
        

        </SwiperSlide>
        </div>
    ))}
            <div className='button-next-slide'>
            <HiOutlineArrowNarrowRight />
            </div>
            <div className='button-prev-slide'>
            <HiOutlineArrowNarrowLeft />
            </div>

    </Swiper>
    </div>
     </div>
   
  )
}

export default Feature