import { useState } from "react";
import { Sidebar } from "../layout/Sidebar";
import { RouteList } from "../layout/RoutesList";
import { Animation } from "../layout/Animation";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import { addProduct } from '../api/product.api';
import useProducts from "../hooks/useProducts";

export function Upload() {
  const [info, setInfo] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priceS, setPriceS] = useState<number>(0);
  const [priceM, setPriceM] = useState<number>(0);
  const [priceL, setPriceL] = useState<number>(0);

  const showData = () => {
    setInfo(true);
  };

  const hideData = () => {
    setInfo(false);
  };
  const uploadData = () => {
    const product = {
        name: name,
        description: description,
        priceS: priceS,
        priceM: priceM,
        priceL: priceL,
        };
    addProduct(product);
  };

  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return<>
     <Sidebar>
        <RouteList />
      </Sidebar>
      <CircularProgress />;

    </> 
  }

  if (isError) {
    return (
      <>
       <Sidebar>
        <RouteList />
      </Sidebar>

        <Alert variant="outlined" severity="error">
          {error && error.message}
        </Alert>
      </>
    );
  }
  return (
    <div>
      <Sidebar>
        <RouteList />
      </Sidebar>

      <Animation dir={"up"}>
        <Box sx={{ margin: "2em" }}>
          <Box sx={{ width: "80%", margin: "auto" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4">The Products</Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#bec0bf" }}
                  style={{ marginRight: "8px" }}
                  onClick={showData}
                >
                  Products
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#bec0bf" }}
                  onClick={hideData}
                >
                  Upload
                </Button>
              </Box>
            </Box>
            {info ? (
              <Box sx={{ mt: "2em" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
                    marginBottom: "2em",
                    backgroundColor: "white",
                    paddingBottom: "1em",
                    paddingTop: "1em",
                    borderRadius: "0.6em",
                  }}
                >
                  <Box
                    width="20%"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="black">Name</Typography>
                  </Box>
                  <Box
                    width="20%"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="black">Description</Typography>
                  </Box>
                  <Box
                    width="20%"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="black">Price Small</Typography>
                  </Box>
                  <Box
                    width="20%"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="black">Price Medium</Typography>
                  </Box>
                  <Box
                    width="20%"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="black">Price Large</Typography>
                  </Box>
                </Box>
                {products &&
                  (Array.isArray(products.data) ? products.data : []).map(
                    (product) => (
                      <Box
                        key={product?.id}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
                          marginBottom: "2em",
                          backgroundColor: "white",
                          paddingBottom: "1em",
                          paddingTop: "1em",
                          borderRadius: "0.6em",
                        }}
                      >
                        <Box
                          width="20%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="black">{product?.name}</Typography>
                        </Box>
                        <Box
                          width="20%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="black">
                            {product?.description}
                          </Typography>
                        </Box>
                        <Box
                          width="20%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="black">
                            {product?.priceS}
                          </Typography>
                        </Box>
                        <Box
                          width="20%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="black">
                            {product?.priceM}
                          </Typography>
                        </Box>
                        <Box
                          width="20%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="black">
                            {product?.priceL}
                          </Typography>
                        </Box>
                      </Box>
                    )
                  )}
              </Box>
            ) : (
              <Box sx={{ mt: "2em" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
                    marginBottom: "2em",
                    backgroundColor: "white",
                    paddingBottom: "1em",
                    paddingTop: "1em",
                    borderRadius: "0.6em",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    sx={{ marginLeft: "20%" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                    sx={{ marginRight: "20%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
                    marginBottom: "2em",
                    backgroundColor: "white",
                    paddingBottom: "1em",
                    paddingTop: "1em",
                    borderRadius: "0.6em",
                  }}
                >
                  <TextField
                    id="outlined-number"
                    label="Price Small"
                    value={priceS}
                    onChange={(e) => setPriceS(+e.target.value)}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ marginLeft: "1em" }}
                  />
                  <TextField
                    id="outlined-number"
                    label="Price Medium"
                    value={priceM}
                    onChange={(e) => setPriceM(+e.target.value)}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="outlined-number"
                    label="Price Large"
                    value={priceL}
                    onChange={(e) => setPriceL(+e.target.value)}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ marginRight: "1em" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    boxShadow: "2px 2px 0px 0px rgba(0,0,0,0.2)",
                    marginBottom: "2em",
                    backgroundColor: "white",
                    paddingBottom: "1em",
                    paddingTop: "1em",
                    borderRadius: "0.6em",
                  }}
                >
                  <Typography></Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#bec0bf", marginRight: "2em" }}
                    onClick={uploadData}
                  >
                    Add product
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Animation>
    </div>
  );
}
