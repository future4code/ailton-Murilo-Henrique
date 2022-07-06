import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SmallProfileCardContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    overflow-x: hidden;
    font-family: 'Exo 2', sans-serif;
`;

const SmallProfileCardItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 10px;
    cursor: pointer;

    img {
        margin-right: 10px;
    }
    :hover {
        background-color: #d0d0d0;
    }
    margin-bottom: 2px;
`;

const SmallCardPicture = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 100px;
    object-fit: cover;
`;

const SmallProfileCard = () => {
    const [matchProfile, setMatchProfile] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-sofiati/matches')
        .then((profile) => {
            setMatchProfile(profile.data.matches)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

return (
    <SmallProfileCardContainer>
        {matchProfile.map((profile, index) => {
            return (
                <SmallProfileCardItem key={index}>
                    <SmallCardPicture key={index + index} src={profile.photo} />
                    <p key={index + 1}>{profile.name}</p>
                </SmallProfileCardItem>
            );
        })}
    </SmallProfileCardContainer>
);
}

export default SmallProfileCard;