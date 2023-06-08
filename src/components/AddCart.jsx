import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import { ApiContext } from "./Store";
import { BiArrowBack } from "react-icons/bi";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ecommerce from "../assets/ecommerce.jpg";

const AddCart = () => {
  const navigate = useNavigate();
  let totalPrice = 0;
  const { cart, setCart, userDetails, setUserDetails } = useContext(ApiContext);
  cart?.forEach((item) => {
    totalPrice += item.price * item.totalQuantity;
  });

  // const clicked = () => {
  //   setCart([]);
  //   // console.log(userDetails);
  // };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    // console.log(userDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    console.log("abc");
    navigate("/");
  };

  // dialog functions
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={5}
          sx={{
            my: 5,
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        >
          <Grid item md={7} sm={12} xs={12}>
            <Table>
              <TableHead>
                <TableCell>Title</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableHead>

              {cart?.map((item) => {
                return (
                  <>
                    <TableBody>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.totalQuantity}</TableCell>
                      <TableCell>${item.price * item.totalQuantity}</TableCell>
                    </TableBody>
                  </>
                );
              })}
            </Table>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "200px",
                mt: 15,
              }}
            >
              <Link to="/">
                <BiArrowBack style={{ color: "black" }} />
              </Link>
              <Typography px={2}>Back to Home</Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sm={12}
            xs={12}
            sx={{ background: "silver", borderRadius: "10px" }}
          >
            <Box sx={{ textAlign: "start", borderRadius: "10px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: 700, py: 4 }}>
                Summary
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 4,
                  pr: 2,
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  Items
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  {cart.length}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 4,
                  pr: 2,
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  Total Price
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  ${totalPrice}
                </Typography>
              </Box>
              <Box sx={{ py: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    px: 21,
                    background: "black",
                    color: "white",
                    "&:hover": {
                      background: "gray",
                      color: "white",
                    },
                  }}
                  onClick={handleClickOpen}
                >
                  Checkout
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Dialog
          // sx={{ width: "1100px", height: "700px" }}
          fullWidth="70%"
          maxWidth="300px"
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Delivery Details</DialogTitle>
          <DialogContent>
            <Box
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
              }}
            >
              <Grid container spacing={10}>
                <Grid item md={6} sm={12} xs={12}>
                  <Box
                    component="img"
                    src={ecommerce}
                    alt="ecommerce"
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <Grid container>
                      <Grid item md={6} sm={12}>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Email
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="email"
                          sx={{ py: 2 }}
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Mobile No.
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="mobile"
                          sx={{ py: 2 }}
                          value={userDetails.mobile}
                          onChange={handleChange}
                        />
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          province
                        </Typography>
                        <TextField
                          name="province"
                          variant="outlined"
                          sx={{ py: 2 }}
                          value={userDetails.province}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          City
                        </Typography>
                        <TextField
                          name="city"
                          variant="outlined"
                          sx={{ py: 2 }}
                          value={userDetails.city}
                          onChange={handleChange}
                        />
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Home Address
                        </Typography>
                        <TextField
                          name="address"
                          variant="outlined"
                          sx={{ py: 2 }}
                          value={userDetails.address}
                          onChange={handleChange}
                        />
                        {/* <Link to="/"> */}
                        <Button
                          type="submit"
                          // component={Link}
                          // to="/"
                          sx={{
                            background: "green",
                            color: "white",
                            textDecoration: "none",
                            textTransform: "capitalize",
                            px: 11,
                            py: 2,
                            mt: 6,
                            "&:hover": {
                              background: "green",
                              color: "white",
                            },
                          }}
                          // onClick={clicked}
                        >
                          Confirm
                        </Button>
                        {/* </Link> */}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AddCart;
