import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 95%;
    border-radius: 10px;
    margin: 25px 0px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`
export const ButtonImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 20px 20px;
`
export const Button = styled.button`
    width: 7rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    &:active{
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
  color: #3498db;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 20px;
`
export const ImageContainer = styled.div`
    display: flex;
    width: 17em;
    height: 15em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`
export const Image = styled.img`
    width: 85%;
    height: 85%;
    border-radius: 10px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    border-radius: 10px;
    margin: 20px 20px;
`
export const Input = styled.input`
    margin: 25px 10px;
    height: 50px;
    border-radius: 10px;
    padding-left: 10px;
    box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
    outline: none;
    border: none;
`