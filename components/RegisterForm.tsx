import { TextField, Grid } from "@mui/material";
import { Button } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, InitialState } from "@/store/reducers";

export default function RegisterForm() {
  const userData = useSelector((state: any) => state.auth.value);
  const dispatch = useDispatch();

  console.log("test user data", userData);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        style={{
          marginTop: 20,
          marginBottom: 20,
          width: "100%",
          backgroundColor: "#4834d4",
        }}
      >
        Register
      </Button>
    </>
  );
}
