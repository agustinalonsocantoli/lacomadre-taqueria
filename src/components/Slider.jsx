// Libraries
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// Img
import { imgSlider } from '../data/slider'; 

export const Slider = () => {

    const slideOptions = {
        interval: 1500,
        autoplay : true,
        pauseOnHover : true,
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '5px',
        pagination: false,
        breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2 },
            768: { perPage: 2 },
            500: { perPage: 1 },
            425: { perPage: 1 }
        },
    };

    return(
        <div className='sliderBox'>
            <Splide options={slideOptions}>
                {imgSlider.map((item, index) => (
                    <SplideSlide key={index}>
                        <div className='imgBox'>
                            <img src={item} alt={`img/${index}`} />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}