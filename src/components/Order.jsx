import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img4 from "../assets/home/slide4.jpg"
import { Pagination } from "swiper";
import Heading from "./Heading";


const Order = () => {
    return (
        <section className="mt-[140px]  max-w-[1240px] mx-auto">
            <Heading heading="ORDER ONLINE" subHeading="From 11:00am to 10:00pm" />
            <section className="mt-16">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img className="w-full" src={img1} alt="" />
                            <h3 className="-mt-16 text-center text-xl text-white">Salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-full" src={img2} alt="" />
                            <h3 className="-mt-16 text-center text-xl text-white">pizzas</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-full" src={img3} alt="" />
                            <h3 className="-mt-16 text-center text-xl text-white">Soups</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-full" src={img4} alt="" />
                            <h3 className="-mt-16 text-center text-xl text-white">desserts</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </section>
    );
};

export default Order;
