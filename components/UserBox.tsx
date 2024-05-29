"use client";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  List,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { login, logout } from "@/store/reducers";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const getUserData = async () => {
  const response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    cache: "force-cache",
  });

  const result = await response.json();
  console.log("RESULT", result);
  return result;
};

export default function UserBox() {
  const userData = useSelector((state: any) => state.auth.value);
  const dispatch = useDispatch();
  const cookies = useCookies();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData.email === "") {
      getUser();
    }
  }, []);

  const getUser = async () => {
    setLoading(true);
    const res = await getUserData();
    dispatch(login(res.data));
    setLoading(false);
  };

  return (
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
                  {userData.email_verified ? "Verified" : "Not Verified"}
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
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: "#4834d4",
            justifyContent: "right",
          }}
          onClick={() => {
            getUser();
          }}
        >
          Edit
        </Button>
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            loading={loading}
            style={{
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: "teal",
              justifyContent: "right",
              marginRight: 10,
            }}
            onClick={() => {
              getUser();
            }}
          >
            Update Data
          </Button>
          <Button
            style={{
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: "#eb4d4b",
              justifyContent: "right",
            }}
            onClick={() => {
              console.log("cookies test");
              cookies.remove("currentUser");
              dispatch(logout());
              router.push("/");
            }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </Box>
  );
}
