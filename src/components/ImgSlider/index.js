import React, { useEffect } from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { selectSlider, setSlider } from '../../features/movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import sanityClient from '../../Client'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

function ImgSlider() {

    const dispatch = useDispatch()
    const dataa = useSelector(selectSlider)

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    useEffect(() => {

        // sanityClient.fetch(
        //     `
        //     *[_type == "slider"] {
        //         slider
        //       }
        //     `
        // ).then((data) => dispatch(setSlider(data)))
        //     .catch(console.error)
    }, [])


    return (
        <Carousel {...settings}>
            {
                dataa?.map((item, index) => (

                    <Wrap>
                        <img src={urlFor(item?.slider).width(800).url()} />
                    </Wrap>
                ))
            }
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color : white;
    }

    .slick-list {
        overflow : visible;
    }

    button {
        z-index : 1;
    }

`

const Wrap = styled.div`
curosr : pointer;
    img {
        border : 4px solid transparent;
        width : 100%;
        height : 100%;
        border-radius : 4px;
        box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration : 300ms;

        &:hover {
            border : 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`