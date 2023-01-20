import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ZoomDialog from "components/ZoomDialog/ZoomDialog";
import { useLoginMutation, useSignUpMutation } from "state/api";
import { setUser } from "state/store";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import {
  AccountCircleOutlined,
  CloseOutlined,
  EmailOutlined,
  PersonOutlineOutlined,
  VpnKeyOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Login = ({ open, setOpen, register }) => {
  const [login, { data, error, isSuccess, isError }] = useLoginMutation();
  const [signUp, { isSignUpLoading }] = useSignUpMutation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  function handleLogin() {
    if (register) {
      if (password === confirmPassword) {
        console.log(username, email, password);
        const userData = new FormData();
        userData.append("uploadImage", image);
        userData.append("username", username);
        userData.append("email", email);
        userData.append("password", password);

        signUp(userData)
          .then((data) => {
            console.log(data);
            dispatch(setUser(data));
            console.log("Signed Up");
          })
          .catch((err) => console.log(err.message));
      } else {
        alert("Passwords dont match");
      }
    } else {
      console.log(email, password);
      login({
        email,
        password,
        // image,
      })
        .then((data) => {
          console.log(data);
          dispatch(setUser(data));
        })
        .catch((err) => console.log(err.message));
    }
  }

  useEffect(() => {
    console.log(data);
  }, [isSuccess]);

  // useEffect(()=>{
  // },[])

  return (
    <ZoomDialog open={open} setOpen={setOpen} className="login">
      {/* <div className="login_header"> */}
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "0.5rem",
        }}
      >
        {register ? "Register" : "Login"}
      </Typography>
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: "0" }}
      >
        <CloseOutlined sx={{ fontSize: "2rem", color: "grey" }} />
      </IconButton>
      {/* </div> */}
      <FormControl className="form_control">
        <div className="login_form">
          {register && (
            <div className="form_field">
              <PersonOutlineOutlined sx={{ fontSize: "1.8rem" }} />
              <TextField
                label="username"
                type="text"
                margin="dense"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="form_field">
            <EmailOutlined sx={{ fontSize: "1.8rem" }} />
            <TextField
              label="email"
              type="email"
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_field">
            <VpnKeyOutlined sx={{ fontSize: "1.8rem" }} />
            <TextField
              label="password"
              type="password"
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {register && (
            <div className="form_field">
              <VpnKeyOutlined sx={{ fontSize: "1.8rem" }} />
              <TextField
                label="confirm password"
                type="password"
                margin="dense"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          {register && (
            <div className="form_field" style={{ justifyContent: "center" }}>
              {/* <label>Upload Profile</label> */}
              <AccountCircleOutlined sx={{ fontSize: "1.8rem" }} />
              <TextField
                type="file"
                margin="dense"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    console.log(e.target.files);
                    setImage(e.target.files[0]);
                  }
                }}
                sx={{
                  width: "55%",
                }}
              />
            </div>
          )}
          <Button
            onClick={handleLogin}
            sx={{
              backgroundColor: theme.palette.secondary["main"],
              margin: "1rem",
            }}
          >
            {register ? "Register" : "Login"}
          </Button>
        </div>
      </FormControl>
    </ZoomDialog>
  );
};

export default Login;
