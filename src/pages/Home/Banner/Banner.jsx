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
                <SwiperSlide><img src="https://i.ibb.co/0sZn1VS/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/R296ZVQ/bannner3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/R296ZVQ/bannner3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/svghKqd/banner4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Banner;