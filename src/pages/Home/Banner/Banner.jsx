import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Container from "../../shared/Container/Container";

const Banner = () => {
    return (
        <Container>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* <SwiperSlide><img src="https://i.ibb.co/gw2V2Hv/banner2.jpg" alt="" /></SwiperSlide> */}
                <SwiperSlide><img src="https://i.ibb.co/9hSkqQ2/8955697.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/tDQqymS/8955302.jpg" alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src="https://i.ibb.co/X3m9qPQ/9393.jpg" alt="" /></SwiperSlide> */}
                <SwiperSlide><img src="https://i.ibb.co/BnQyQ9t/7438290-32611.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Banner;