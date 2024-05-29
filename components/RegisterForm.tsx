import { TextField, Grid } from "@mui/material";
import { Button } from "@mui/joy";

import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/reducers";
import { useState } from "react";
import { useRouter } from "next/navigation";

const register = async () => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      /* "Access-Control-Allow-Origin": "http://localhost:4000", */
    },
    redirect: "follow",
    cache: "force-cache",
    body: JSON.stringify({
      displayName: "John Doe",
      email: "johndoe@gmail.com",
      password: "password",
    }),
  });

  const result = await response.json();

  console.log("CLIENT SIDE", result);
  return result;
};

export default function RegisterForm() {
  const router = useRouter();
  const userData = useSelector((state: any) => state.auth.value);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("test user data", userData);
  console.log("error message", errorMessage);

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
        loading={isLoading}
        style={{
          marginTop: 20,
          marginBottom: 10,
          width: "100%",
          backgroundColor: "#4834d4",
        }}
        onClick={async () => {
          setIsLoading(true);
          setErrorMessage("");
          const fetchedData: any = await register();
          console.log("FETCHED ->", fetchedData);
          if (fetchedData.code === 201) {
            dispatch(
              login({
                isAuthenticated: true,
                full_name: fetchedData.data.full_name,
                email: fetchedData.data.email,
                photo_url: "",
                email_verified: false,
                created_at: fetchedData.data.created_at,
                last_login: fetchedData.data.last_login,
              })
            );
            router.push("/home");
            setErrorMessage("");
          } else {
            setErrorMessage(fetchedData.message);
          }
          setIsLoading(false);
        }}
      >
        Register
      </Button>
      {errorMessage && errorMessage.length > 0 && (
        <div style={{ width: "100%", textAlign: "center", marginBottom: 10 }}>
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        </div>
      )}
    </>
  );
}
