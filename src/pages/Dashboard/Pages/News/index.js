import React, { useState } from "react";
import Dropdown from "../../../../components/navigation/Dropdown";
import {
  Container,
  NewsBox,
  ImgBox,
  ImgContainer,
  ButtonContainer,
  Img,
  Button,
  TextareBox,
  Textarea,
  Botton,
  BottonBox,
  ContainerNew,
  // Select,
  DropDownSlecet,
  ImgBoxx,
  // IconSelect,
} from "./style";
import img from "../../../../assests/6595158_preview1.png";
function NewsPage() {
  const [selected, setSelected] = useState(-1)
  return (
    <Container>
      <ContainerNew>
        <NewsBox>
          <ImgBoxx>
            <ImgContainer>
              <Img src={img} />
            </ImgContainer>
            <ButtonContainer>
              <Button>Reset</Button>
              <Button>Upload</Button>
            </ButtonContainer>
          </ImgBoxx>
          <ImgBox>
            <TextareBox>
              <Textarea></Textarea>
            </TextareBox>
            <BottonBox>
            <Dropdown selected={selected} setSelected={setSelected} />
            <Dropdown selected={selected} setSelected={setSelected} />
              {/* <DropDownSlecet>
                    <Select>Selected Itames</Select>
                    <IconSelect>
                    <i class="bx bxs-chevron-down"></i>
                    </IconSelect>
                  </DropDownSlecet> */}
              {/* <DropDownSlecet>
                    <Select>Selected Itames</Select>
                    <IconSelect>
                    <i class="bx bxs-chevron-down"></i>
                    </IconSelect>
                  </DropDownSlecet> */}
              <Botton>Send </Botton>
            </BottonBox>
          </ImgBox>
        </NewsBox>
      </ContainerNew>
    </Container>
  );
}

export default NewsPage;
