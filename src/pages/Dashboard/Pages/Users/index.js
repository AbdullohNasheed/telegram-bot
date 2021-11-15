import React from "react";
import Image from"../../../../assests/wp2803554.jpeg"
import {
  Container,
  UserBox,
  Table,
  Td,
  Tr,
  TrBox,
  ImgBox,
  Users,
  Name,
  Nuber,
  Img,
} from "./style";

function UsersPage() {
  return (
    <Container>
      <UserBox>
        <Table>
          <Td>
            <Tr>
              <TrBox>
                <ImgBox>
                <Img src={Image}/>
                </ImgBox>
              </TrBox>
            </Tr>
          </Td>
          <Td>
              <Tr>
              <Users>
                  <Name>Stive Jobs</Name>
                </Users>
              </Tr>
          </Td>
          <Td>
            <Tr>
            <Nuber>+998(99) 859 59 37</Nuber>
            </Tr>
          </Td>
        </Table>
      </UserBox>
      <UserBox>
        <Table>
          <Td>
            <Tr>
              <TrBox>
                <ImgBox>
                <Img src={Image}/>
                </ImgBox>
              </TrBox>
            </Tr>
          </Td>
          <Td>
              <Tr>
              <Users>
                  <Name>Stive Jobs</Name>
                </Users>
              </Tr>
          </Td>
          <Td>
            <Tr>
            <Nuber>+998(99) 859 59 37</Nuber>
            </Tr>
          </Td>
        </Table>
      </UserBox>
      <UserBox>
        <Table>
          <Td>
            <Tr>
              <TrBox>
                <ImgBox>
                <Img src={Image}/>
                </ImgBox>
              </TrBox>
            </Tr>
          </Td>
          <Td>
              <Tr>
              <Users>
                  <Name>Stive Jobs</Name>
                </Users>
              </Tr>
          </Td>
          <Td>
            <Tr>
            <Nuber>+998(99) 859 59 37</Nuber>
            </Tr>
          </Td>
        </Table>
      </UserBox>
    </Container>
  );
}

export default UsersPage;
