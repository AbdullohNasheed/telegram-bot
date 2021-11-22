import React from 'react'
import {
Container,
SettingContainer,
IconContainer,
IconBox,
Input,
} from"./style"

function SettingsPage() {
    return (
        <Container>
            <SettingContainer>
                <IconContainer>
                    <IconBox><i class='bx bxl-facebook'></i></IconBox>
                    <Input placeholder="facebook"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bxl-instagram-alt'></i></IconBox>
                    <Input placeholder="instagram"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bxl-telegram' ></i></IconBox>
                    <Input placeholder="telegram"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bxl-facebook'></i></IconBox>
                    <Input placeholder="gmail"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bxs-phone'></i></IconBox>
                    <Input placeholder="phone"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bx-globe'></i></IconBox>
                    <Input placeholder="url:"/>
                </IconContainer>
                <IconContainer>
                    <IconBox><i class='bx bxs-phone-call'></i></IconBox>
                    <Input placeholder="call"/>
                </IconContainer>
            </SettingContainer>
        </Container>
    )
}

export default SettingsPage
