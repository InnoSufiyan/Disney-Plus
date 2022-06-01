import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectMovie, selectMovies, setMovie } from '../../features/movie/movieSlice';
import sanityClient from '../../Client'

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}


function Detail() {
    const dispatch = useDispatch()
    const dataa = useSelector(selectMovie)
    const params = useParams();

    useEffect(() => {

        sanityClient.fetch(
            `
            *[_type=="post" && _id == "${params.id}" ] {
                _id,
  title,
  slug,
  subTitle,
  titleImg,
  backgroundImage,
  cardImg,
  publishedAt,
  description,
              }
            `
        ).then((data) => dispatch(setMovie((data))))
            .catch(console.error)
    }, [])

    return (
        <Container>
            {
                dataa?.filter((item) => item?._id == params.id)?.map((item, index) => (
                    <>
                        <Background>
                            <img src={urlFor(item.backgroundImage).width(3200).url()} />
                        </Background>
                        <ImageTitle>
                            <img src={urlFor(item.titleImg).width(400).url()} />
                        </ImageTitle>
                        <Controls>
                            <PlayButton>
                                <img src="/images/play-icon-black.png" />
                                <span>Play</span>
                            </PlayButton>
                            <TrailerButton>
                                <img src="/images/play-icon-white.png" />
                                <span>Trailer</span>
                            </TrailerButton>
                            <AddButton>
                                <span>+</span>
                            </AddButton>
                            <GroupWatchButton>
                                <img src="/images/group-icon.png" />
                            </GroupWatchButton>
                        </Controls>
                        <SubTitle>
                            {item?.subTitle}
                        </SubTitle>
                        <Description>
                            {item?.description[0].children[0].text}
                        </Description>
                    </>
                ))
            }


        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom : 0;
    right: 0;
    left : 0;
    z-index : -1;
    opacity: 0.8;

    img {
        width: 100%;
        height : 100%;
        object-fit : cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin : 60px 0;

    img {
        // width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;    
`
const PlayButton = styled.button`
    border-radius : 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right : 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background : rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background-color : rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background-color : rgb(0,0,0, 0.3);
    color : white;
    border : 1px solid rgb(249,249,249);
    text-transform : uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background : rgb(0,0,0)
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
`