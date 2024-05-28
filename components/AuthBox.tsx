"use client";

import { Box } from "@mui/material";
import RegisterForm from "./RegisterForm";

export default function AuthBox() {
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
        Register
      </h1>
      <RegisterForm />
      <span
        style={{
          textAlign: "center",
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-around",
          padding: "0 60px",
        }}
      >
        <p>Doesn&lsquo;t have an account?</p> <a href="#">Login</a>
      </span>
    </Box>
  );
}
