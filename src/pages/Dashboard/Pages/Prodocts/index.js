import React, { useState, useEffect } from "react";
import { Container, Table, Td, Tr, ImgBox, Img, ProdoctsBox, Icon, IconBox, Addnew, Add } from "./style";
import image from "../../../../assests/6595158_preview1.png"
import { requests } from "../../../../api/requests"
import { Link } from "react-router-dom";
function ProductsPage() {
  const [products, setProducts] = useState([])
  let effect = async () => {
    try {
      let res = await requests.products.getProducts()
      setProducts(res.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    effect()
  }, [])
  return (
    <Container>
      <Link style={{
        textDecoration: 'none'
      }} to="/dashboard/prodocts/addnew">
        <Addnew>
          <Add>Add new <i class='bx bx-plus'></i></Add>
        </Addnew>
      </Link>
      {products.map(e => {
        return <ProdoctsBox>
          <Table>
            <Tr>
              <Td>
                <ImgBox>
                  <Img src={e.image_url} />
                </ImgBox>
              </Td>
              <Td>
                {e.name}
              </Td>
              <Td>
                {e.price}
              </Td>
              <Td>
                {e.category.name}
              </Td>
              <Td>
                {e.expires_in}
              </Td>
            </Tr>
          </Table>
          <Icon>
            <IconBox><i class='bx bxs-edit'></i></IconBox>
            <IconBox><i class='bx bx-trash-alt' ></i></IconBox>
          </Icon>
        </ProdoctsBox>
      })}
    </Container>
  );
}

export default ProductsPage;
