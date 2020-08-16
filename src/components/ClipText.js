import styled from 'styled-components';

export const ClipText = styled.div`
    font-size: 6em;
    font-weight: bold;
    line-height: 1;
    position: relative;
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #fff; /*fallback*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url(${p => p.background});
    background-position: center; 
    background-repeat: repeat; 
    background-size: cover;

    &:before,
    &:after {
        position: absolute;
        content: '';
    }

    /* Text Background */
    &:before {
        z-index: -2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: inherit;
        background-position: center; 
        background-repeat: repeat; 
        background-size: cover;
    }

    /* Text Background */
    &:after {
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${p => p.overlay || "black"};
    }
    &:hover{
        &:after{
            opacity:0.6;
            transition: opacity 300ms;
        }
    }
`;
