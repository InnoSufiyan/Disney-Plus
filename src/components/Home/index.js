import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgSlider from '../ImgSlider';
import Movies from '../Movies';
import Viewers from '../Viewers';
import db from '../../congif/firebase'
import { getFirestore, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setMovies, setSlider } from '../../features/movie/movieSlice';
import sanityClient from '../../Client'
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}




function Home() {
    const dispatch = useDispatch()

    const [data, setData] = useState([])

    useEffect(() => {

        sanityClient.fetch(
            `
            *[_type == "post"] {
                _id,
  title,
  slug,
  subTitle,
  titleImg,
  backgroundImage,
  cardImg,
  publishedAt,
  description,
  postType,
  webLink,
  portfolioLink
              }
            `
        ).then((data) => dispatch(setMovies(data)))
            .catch(console.error)

        sanityClient.fetch(
            `
            *[_type == "slider"] {
                slider
              }
            `
        ).then((data) => dispatch(setSlider(data)))
            .catch(console.error)
    }, [])


    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position : relative;
    overflow-x : hidden;

    &:before {
        background : url("/images/home-background.png") center center / cover no-repeat fixed;
        content : "";
        position : absolute;
        top : 0;
        bottom : 0;
        left : 0;
        right : 0;
        z-index : -1;
    }
`