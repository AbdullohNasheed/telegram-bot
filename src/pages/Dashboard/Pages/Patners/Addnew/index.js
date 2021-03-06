import React, { useRef, useState } from 'react'
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
    Save,
    SaveContainer,
    AdrssCityContainer,
    AdrssCityContactInput,
    AllContainer,
    InputUser,
    IconBox,
    SettingContainer,
    IconContainerr,
    AdrssCityContactInputT,
    ContainerSave,
} from "./style"
import { requests, url } from "../../../../../api/requests";
import styled from 'styled-components';
export default function AddnewPag() {
    let _imageInput = useRef();
    let [image, setImage] = useState();
    let [name, setName] = useState("");
    let [adress, setAdrss] = useState("");


    let onUpload = () => {
        _imageInput.current.click();
    };
    let onChangeName = (e) => {
        setName(e.target.value)
    };
    let onChangeAdrss = (e) => {
        setAdrss(e.target.value)
    };

    let onImageUpload = async (e, index) => {
        if (e.target.files.length > 0) {
            let form = new FormData();
            form.append("files", e.target.files[0]);
            try {
                let res = await requests.uploads.uploadImage(form);
                setImage({
                    name: e.target.files[1],
                    image_url: `${url}/file-download/${res.data[0]}`,
                });
            } catch (error) {
                alert(error);
            }
        }
    }

    let onAddPartner = async () => {
        try {
            let res = await requests.partners.addPartner({
                name: name,
                image: image.image_url
            })
            console.log({ res });
        } catch (error) {
            console.log({ error });
        }
    }


    return (
        <>
            <Container>
                <ButtonImageContainer>
                    <ImageContainer>
                        <Image src={!!image ? image.image_url : Img} />
                        <input
                            style={{
                                display: 'none',
                            }}
                            ref={_imageInput}
                            type={"file"}
                            name='image'
                            id="image-upload"
                            onChange={onImageUpload}
                        />
                    </ImageContainer>
                    <ButtonContainer>
                        <Button>Reset</Button>
                        <Button onClick={onUpload}>Upload</Button>
                    </ButtonContainer>
                </ButtonImageContainer>
                <InputContainer>
                    <Input
                        placeholder="name"
                        onChange={onChangeName}
                        value={name}
                    />
                    <Input
                        placeholder="adress"
                        onChange={onChangeAdrss}
                        value={adress}
                    />
                </InputContainer>
            </Container>
            <AdrssCityContainer>
                <AdrssCityContactInput placeholder="city" />
                <AdrssCityContactInput placeholder="region" />
                <AdrssCityContactInputT placeholder="address" />
            </AdrssCityContainer>
            <SaveContainer>
                <SettingContainer>
                    <IconContainerr>
                        <IconBox><i class='bx bxl-facebook'></i></IconBox>
                        <InputUser placeholder="facebook" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bxl-instagram-alt'></i></IconBox>
                        <InputUser placeholder="instagram" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bxl-telegram' ></i></IconBox>
                        <InputUser placeholder="telegram" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bxl-facebook'></i></IconBox>
                        <InputUser placeholder="gmail" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bxs-phone'></i></IconBox>
                        <InputUser placeholder="phone" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bx-globe'></i></IconBox>
                        <InputUser placeholder="url:" />
                    </IconContainerr>
                    <IconContainerr>
                        <IconBox><i class='bx bxs-phone-call'></i></IconBox>
                        <InputUser placeholder="call" />
                    </IconContainerr>
                </SettingContainer>
            </SaveContainer>
            <ContainerSave>
                <Save onClick={onAddPartner}>Save</Save>
            </ContainerSave>
        </>
    )
}
