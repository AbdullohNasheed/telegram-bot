import React from 'react'
import Img from "../../../../../assests/image_2021-11-08_19-42-30.png"
import Dropdown from "../../../../../components/navigation/Dropdown";
import {
    Container,
    Image,
    ImgContainer,
    ImgBox,
    BottonContainer,
    Botton,
    InputAreContainer,
    Input,
    Textarea,
    CategoriyaPatnerContainer,
    InputContainer,
    Inputt,
    NameImageContainer,
    AllContainer,
    ImageContainer,
    Imagee,
    InputName,
    Icon,
    IconBotton,
    AddNewContainer,
    Add,
    CanacelSaveContainer,
    Cancel,
} from './style'

function AddNewPage() {
    return (
        <Container>
            <AllContainer>
                <ImgContainer>
                    <ImgBox>
                        <Image src={Img} />
                    </ImgBox>
                    <BottonContainer>
                        <Botton>Reset</Botton>
                        <Botton>Upload</Botton>
                    </BottonContainer>
                </ImgContainer>
                <InputAreContainer>
                    <Input placeholder="name" />
                    <Textarea placeholder="Description"></Textarea>
                    <CategoriyaPatnerContainer>
                        <Dropdown />
                        <Dropdown />
                    </CategoriyaPatnerContainer>
                    <InputContainer>
                        <Inputt placeholder="price" />
                        <Inputt placeholder="expire" />
                        <Inputt placeholder="profit" />
                    </InputContainer>
                </InputAreContainer>
            </AllContainer>
            <AddNewContainer>
                <Add>Addnew <i class='bx bx-plus'></i> </Add>
            </AddNewContainer>
            <NameImageContainer>
                <ImageContainer>
                    <Imagee src={Img} />
                </ImageContainer>
                <IconBotton>
                    <Icon><i class='bx bx-edit'></i></Icon>
                    <Icon><i class='bx bx-trash'></i></Icon>
                </IconBotton>
                <InputName placeholder="name"/>
            </NameImageContainer>
            <CanacelSaveContainer>
                    <Cancel>Cancel</Cancel>
                    <Cancel>Save</Cancel>
            </CanacelSaveContainer>
        </Container>
    )
}

export default AddNewPage
