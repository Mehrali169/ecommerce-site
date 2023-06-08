import { Badge, Box, Container, Typography } from "@mui/material";
import { ApiContext } from "./Store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(ApiContext);
  return (
    <Box sx={{ background: "black", color: "white" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <Typography sx={{ fontSize: "25px" }}>Shopping Site</Typography>
        <Link to="/addcart">
          <Badge badgeContent={cart.length} color="primary">
            <AiOutlineShoppingCart size={32} style={{ color: "white" }} />
          </Badge>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
