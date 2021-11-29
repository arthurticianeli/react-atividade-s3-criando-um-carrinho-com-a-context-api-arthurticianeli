import { useContext } from "react";
import { CartContext } from "../providers/cart";
import { CatalogueContext } from "../providers/catalogue";

import { Button } from "@mui/material";

const ButtonExp = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default ButtonExp;
