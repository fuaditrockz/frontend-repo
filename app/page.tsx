"use client";

import { Container, Box, Grid, TextField } from "@mui/material";
import { Button } from "@mui/joy";
import styles from "./page.module.css";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, InitialState } from "@/store/reducers";

export default function Home() {
  const userData = useSelector((state: any) => state.auth.value);
  const dispatch = useDispatch();

  console.log("test user data", userData);

  return (
    <main className={styles.main}>
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "60vh" }}
        >
          <Grid item xs={3}>
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
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
