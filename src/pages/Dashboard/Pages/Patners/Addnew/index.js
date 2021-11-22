import React from 'react'
import Img from "../../../../../assests/image_2021-11-08_19-42-30.png"
import {
    Container,
    ButtonContainer,
    ButtonImageContainer,
    ImageContainer,
    Button,
    Image,
    InputContainer,
    Input,
} from "./style"

function AddnewPag() {
    return (
        <Container>
            <ButtonImageContainer>
                <ImageContainer>
                    <Image src={Img} />
                </ImageContainer>
                <ButtonContainer>
                    <Button>Reset</Button>
                    <Button>Upload</Button>
                </ButtonContainer>
            </ButtonImageContainer>
            <InputContainer>
                <Input placeholder="name"/>
                <Input placeholder="adress"/>
            </InputContainer>
        </Container>
    )
}

export default AddnewPag
