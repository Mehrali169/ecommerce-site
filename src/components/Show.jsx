import React, { useContext } from "react";
import { ApiContext } from "./Store";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Show = () => {
  const { info } = useContext(ApiContext);
  return (
    <Box>
      <Header />
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {info.map((item, i) => (
          <NavLink
            to={"/product/" + item.id}
            style={{ textDecoration: "none" }}
          >
            <Card sx={{ width: 300, height: 300, margin: 4 }} key={i}>
              <Box
                component="img"
                src={item.image}
                alt="green iguana"
                width="20%"
                height="20%"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  ${item.price}
                </Typography>
                <Typography sx={{ fontSize: "20px" }} component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </NavLink>
        ))}
      </Container>
    </Box>
  );
};

export default Show;
