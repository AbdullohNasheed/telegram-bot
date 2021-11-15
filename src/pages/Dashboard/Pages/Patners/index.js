import React from "react";
import {
  Container,
  PartnerBox,
  Table,
  Tr,
  Td,
  TdContainer,
  ImgBox,
  NameBox,
  Name,
  FirstName,
  Img,
  Icon,
  IconBox,
  Addnew,
  Add,
} from "./style";
import ImgCutonmer from "../../../../assests/wp2803554.jpeg";
function PatersPage() {
  return (
    <Container>
      <Addnew>
        <Add>
          Add new <i class="bx bx-plus"></i>
        </Add>
      </Addnew>
      <PartnerBox>
        <Table>
          <Tr>
            <Td>
              <TdContainer>
                <ImgBox>
                  <Img src={ImgCutonmer} />
                </ImgBox>
                <NameBox>
                  <Name>Sanjar</Name>
                  <FirstName>Sinhanya</FirstName>
                </NameBox>
              </TdContainer>
            </Td>
            <Td>Address: Qoratosh</Td>
            <Td>Category: Producta </Td>
          </Tr>
        </Table>
        <Icon>
          <IconBox>
            <i class="bx bxs-edit"></i>
          </IconBox>
          <IconBox>
            <i class="bx bx-trash-alt"></i>
          </IconBox>
        </Icon>
      </PartnerBox>
    </Container>
  );
}

export default PatersPage;
