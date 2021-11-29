import ButtonExp from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../providers/catalogue";

import { CartContext } from "../providers/cart";

import {
  Typography,
  Container,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

function ProductList({ type }) {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "catalogue" && (
        <>
          <Typography variant="h5">Catalogo</Typography>

          {catalogue.map((item, index) => (
            <Card key={index} sx={{ mb: "20px", width: 275 }}>
              <CardContent>{item.name}</CardContent>
              <CardActions>
                <ButtonExp type={type} item={item} />
              </CardActions>
            </Card>
          ))}
        </>
      )}

      {type === "cart" && (
        <>
          <Typography variant="h5">Carrinho</Typography>

          {cart.map((item, index) => (
            <Card
              key={index}
              sx={{
                mb: "20px",
                width: 275,
                backgroundColor: "lightsteelblue",
              }}
            >
              <CardContent>{item.name}</CardContent>
              <CardActions>
                <ButtonExp type={type} item={item} />
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

export default ProductList;
