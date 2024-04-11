import { useHome } from "../../useHome";
import Card from "../card/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeCursosParte2 = () => {
    const { arrayContents } = useHome();

    const modules = arrayContents.filter((module, index) => index > 3);

    return (
        <div className="modulosContainer w-full h-auto flex-column justify-center content-center mb-20">
            <div className="modulosContainerHeader w-full h-auto text-center p-2 mb-10">
                <h1 className="font-poppins font-medium text-Blue text-[52px]">Segunda etapa</h1>
            </div>
            <div className="w-full">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    // loop={true}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                >
                    {modules.length > 0 ? (
                        modules.map((module, index) => (
                            <SwiperSlide
                                key={index}
                                className='flex items-center justify-center'
                            >
                                <Card
                                    data={module}
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="font-poppins text-4xl text-Blue font-regular text-center my-5 p-5">Proximamente</p>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCursosParte2;
