import React from "react";
import { Container, Table, Td, Tr, ImgBox, Img, ProdoctsBox, Icon, IconBox, Addnew, Add } from "./style";
import image from"../../../../assests/6595158_preview1.png"

function ProductsPage() {
  return (
    <Container>
        <Addnew>
            <Add>Add new <i class='bx bx-plus'></i></Add>
        </Addnew>
      <ProdoctsBox>
        <Table>
          <Tr>
            <Td>
              <ImgBox>
                <Img src={image}/>
              </ImgBox>
            </Td>
            <Td>
                Name
            </Td>
            <Td>
                Price
            </Td>
            <Td>
                Category
            </Td>
            <Td>
                Count
            </Td>
            </Tr>
        </Table>
        <Icon>
            <IconBox><i class='bx bxs-edit'></i></IconBox>
            <IconBox><i class='bx bx-trash-alt' ></i></IconBox>
        </Icon>
      </ProdoctsBox>
      <ProdoctsBox>
        <Table>
          <Tr>
            <Td>
              <ImgBox>
                <Img src={image}/>
              </ImgBox>
            </Td>
            <Td>
                Name
            </Td>
            <Td>
                Price
            </Td>
            <Td>
                Category
            </Td>
            <Td>
                Count
            </Td>
            </Tr>
        </Table>
        <Icon>
            <IconBox><i class='bx bxs-edit'></i></IconBox>
            <IconBox><i class='bx bx-trash-alt' ></i></IconBox>
        </Icon>
      </ProdoctsBox>
      <ProdoctsBox>
        <Table>
          <Tr>
            <Td>
              <ImgBox>
                <Img src={image}/>
              </ImgBox>
            </Td>
            <Td>
                Name
            </Td>
            <Td>
                Price
            </Td>
            <Td>
                Category
            </Td>
            <Td>
                Count
            </Td>
            </Tr>
        </Table>
        <Icon>
            <IconBox><i class='bx bxs-edit'></i></IconBox>
            <IconBox><i class='bx bx-trash-alt' ></i></IconBox>
        </Icon>
      </ProdoctsBox>
    </Container>
  );
}

export default ProductsPage;
