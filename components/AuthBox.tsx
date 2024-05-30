"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { setAuthBoxPage } from "@/store/reducers";
import { useState } from "react";

export default function AuthBox() {
  const dispatch = useDispatch();
  const authBoxPage = useSelector((state: any) => state.auth.value.authBoxPage);

  const [loading, isLoading] = useState(false);

  return (
    <Box
      height={450}
      width={400}
      my={4}
      gap={4}
      px={2}
      py={4}
      sx={{ border: "1px solid #4834d4", borderRadius: 5 }}
    >
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {authBoxPage === "register" ? "Register" : "Login"}
      </h1>
      {authBoxPage === "register" && <RegisterForm />}
      {authBoxPage === "login" && <LoginForm />}
      <div
        style={{ display: "inline", justifyContent: "center", width: "100%" }}
      >
        <span
          style={{
            textAlign: "center",
            width: "100%",
            display: "inline-flex",
          }}
        >
          <p style={{ marginRight: 5 }}>
            {authBoxPage === "register"
              ? "Have an account?"
              : "Doesn't have an account?"}
          </p>{" "}
          <Link
            href="#"
            onClick={() => {
              if (authBoxPage === "register") dispatch(setAuthBoxPage("login"));
              else dispatch(setAuthBoxPage("register"));
            }}
            style={{ fontWeight: "bold" }}
          >
            {authBoxPage === "register" ? "Login" : "Register"}
          </Link>
        </span>
      </div>
    </Box>
  );
}
