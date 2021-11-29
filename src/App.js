import { Container } from "@mui/material";
import ProductList from "./components/productList";
import Providers from "./components/providers/providers";

function App() {
  return (
    <div className="App">
      <Providers>
        <Container sx={{ display: "flex" }}>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </Container>
      </Providers>
    </div>
  );
}

export default App;
