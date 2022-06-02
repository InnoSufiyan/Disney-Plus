import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFilter } from '../../features/movie/movieSlice';


function Viewers() {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState("")

    const submitHandler = (dt) => {
        setSelected(dt)
        dispatch(setFilter(dt))
    }
    return (
        <Container>
            <Wrap style={{
                transform: selected == "Animation" ? "scale(1.05)" : "",
                borderColor: selected == "Animation" ? "rgba(249, 249, 249, 0.8)" : "",
                boxShadow: selected == "Animation" ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px" : ""
            }} onClick={() => submitHandler("")}>
                <img src="/images/All.png" />
            </Wrap>
            <Wrap style={{
                transform: selected == "Animation" ? "scale(1.05)" : "",
                borderColor: selected == "Animation" ? "rgba(249, 249, 249, 0.8)" : "",
                boxShadow: selected == "Animation" ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px" : ""
            }} onClick={() => submitHandler("Animation")}>
                <img src="/images/Animation.png" />
            </Wrap>
            <Wrap style={{
                transform: selected == "websites" ? "scale(1.05)" : "",
                borderColor: selected == "websites" ? "rgba(249, 249, 249, 0.8)" : "",
                boxShadow: selected == "websites" ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px" : ""
            }} onClick={() => submitHandler("websites")}>
                <img src="/images/websites.png" />
            </Wrap>
            <Wrap style={{
                transform: selected == "mobile-apps" ? "scale(1.05)" : "",
                borderColor: selected == "mobile-apps" ? "rgba(249, 249, 249, 0.8)" : "",
                boxShadow: selected == "mobile-apps" ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px" : ""
            }} onClick={() => submitHandler("mobile-apps")}>
                <img src="/images/mobile-apps.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers


const Container = styled.div`
    margin-top : 36px;
    display : grid;
    grid-gap: 25px;
    padding : 30px 0px 26px; 
    grid-template-columns : repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius : 10px;
    border : 3px solid rgba(249, 249, 249, 0.1);
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor : pointer;
    transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    &:hover {
        transform : scale(1.05);
        border-color : rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px;
    }
`