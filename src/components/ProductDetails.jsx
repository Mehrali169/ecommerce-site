import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ApiContext } from "./Store";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { info, cart, setCart } = useContext(ApiContext);
  const check = info.filter((item) => item.id === +id);
  // console.log(check, "check");
  // console.log(cart, "cart data");
  // im writing .....

  const add = () => {
    const extra = cart.filter((item) => item.id === check[0]?.id);
    if (extra.length === 0) {
      check[0].totalQuantity = num;
      setCart([...cart, ...check]);
    }
  };

  const [num, setNum] = useState(1);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num === 1) {
      setNum(1);
    } else setNum(num - 1);
  };

  return (
    <Box>
      <Header />
      <Container>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              component="img"
              src={check[0]?.image}
              alt="green iguana"
              width="50%"
              height="50%"
              sx={{ pt: 20 }}
            />
            <Box>
              <Typography></Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{ pt: 20 }}>
              <Typography variant="h4" component="div">
                Category
              </Typography>
              <Typography variant="h4" component="div">
                {check[0]?.category}
              </Typography>
              <Typography variant="h5" component="div">
                {check[0]?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {check[0]?.description}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                color="text.secondary"
              >
                USD ${check[0]?.price}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                color="text.secondary"
              >
                StockAvailable: {check[0]?.rating.count}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                color="text.secondary"
              >
                Rating: {check[0]?.rating.rate}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 5,
              }}
            >
              <Button
                sx={{ fontSize: "20px", fontWeight: 700 }}
                onClick={decrement}
              >
                -
              </Button>
              <Typography
                sx={{ px: 5, py: 1, margin: 2, border: "2px solid gray" }}
              >
                {num}
              </Typography>
              <Button
                sx={{ fontSize: "20px", fontWeight: 700 }}
                onClick={increment}
              >
                +
              </Button>
            </Box>
            <Box>
              <Link to="/addcart">
                <Button
                  variant="contained"
                  sx={{
                    margin: 4,
                    background: "orange",
                    textTransform: "capitalize",
                    px: 4,
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                  onClick={add}
                >
                  Buy Now
                </Button>
              </Link>
              <Button
                variant="contained"
                sx={{
                  margin: 4,
                  background: "green",
                  textTransform: "capitalize",
                  px: 4,
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
                onClick={add}
              >
                Add Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
