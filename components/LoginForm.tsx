"use client";
import { TextField, Grid } from "@mui/material";
import { Button } from "@mui/joy";

import { useDispatch } from "react-redux";
import { login } from "@/store/reducers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const registerUser = async (data: any) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    cache: "force-cache",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  const result = await response.json();
  return result;
};

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin: SubmitHandler<Inputs> = async (inputData) => {
    console.log("REGISTERING ->", inputData);

    setIsLoading(true);
    setErrorMessage("");
    const {
      code,
      message,
      data,
    }: {
      code: number;
      message: string;
      data?: any;
    } = await registerUser(inputData);

    console.log("FETCHED ->", data);

    if (code === 200) {
      const { full_name, email, created_at, last_login } = data;
      const userData = {
        isAuthenticated: true,
        full_name: full_name,
        email: email,
        photo_url: "",
        email_verified: false,
        created_at: created_at,
        last_login: last_login,
      };
      dispatch(login(userData));
      router.push("/home");
      setErrorMessage("");
    } else {
      setErrorMessage(message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              {...register("email")}
              style={{ width: "100%" }}
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              type="password"
              {...register("password")}
              style={{ width: "100%" }}
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
          type="submit"
        >
          Log In
        </Button>
      </form>
      {errorMessage && errorMessage.length > 0 && (
        <div style={{ width: "100%", textAlign: "center", marginBottom: 10 }}>
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        </div>
      )}
    </>
  );
}
