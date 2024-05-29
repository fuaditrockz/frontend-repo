"use client";

import {
  Container,
  Grid,
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  List,
} from "@mui/material";
import { Button } from "@mui/joy";
import styles from "@/app/page.module.css";
import { useSelector } from "react-redux";
import React from "react";

const ExplorePage = () => {
  const userData = useSelector((state: any) => state.auth.value);

  console.log("HOME", userData);

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
              width={500}
              my={4}
              gap={4}
              px={2}
              py={4}
              sx={{ border: "1px solid teal", borderRadius: 5 }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "20px",
                  color: "teal",
                }}
              >
                User Data
              </h1>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Full Name"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {userData.full_name}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Email"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {userData.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Verified Status"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {userData.email_verified
                            ? "Verified"
                            : "Not Verified"}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
              <div
                style={{
                  width: "100%",
                  display: "inline-flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    backgroundColor: "teal",
                    justifyContent: "right",
                  }}
                >
                  Update Data
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default ExplorePage;
