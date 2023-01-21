import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAddProductMutation } from "state/api";
import "./Form.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Form() {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.global.user);
  const [addProduct, { data, isSuccess }] = useAddProductMutation();
  const navigate = useNavigate();
  function handleSubmit() {
    console.log(name, description, user._id);
    const productData = new FormData();
    productData.append("uploadImage", image);
    productData.append("name", name);
    productData.append("description", description);
    productData.append("owner", user._id);

    addProduct(productData)
      .unwrap()
      .then((data) => {
        // console.log(data);
        console.log("here");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="dashboard_form">
      <h1 className="form_title">Add Product</h1>
      <FormControl sx={{ gap: "2rem" }}>
        <div className="form_textfield">
          <div className="form_content">
            <label>Product Name</label>
            <TextField
              type="text"
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form_content">
            <label>Upload Images</label>
            <TextField
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) setImage(e.target.files[0]);
              }}
            />
          </div>
          <div className="form_content">
            <label>Description</label>
            <TextField
              type="text"
              multiline
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="form_button">
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              justifyContent: "center",
            }}
          >
            Add
          </Button>
        </div>
      </FormControl>
    </div>
  );
}

export default Form;
