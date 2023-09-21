import React from "react";
import { Avatar, Typography, Grid, Paper, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout } from "../../Features/User/loginSlice";
import LangSwitch from "../../Components/LangSwitch";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <LangSwitch />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper sx={{ p: 4 }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Grid item>
                <Avatar
                  src="/path/to/avatar.jpg"
                  alt="Profile Picture"
                  sx={{ width: 120, height: 120 }}
                />
              </Grid>

              <Grid item>
                <Typography variant="h4" align="center">
                  Admin
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1" align="center">
                  Programmer
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam porttitor risus non libero finibus, eget tristique
                  turpis ultrices. Sed ut libero euismod, congue ex et,
                  vestibulum lacus.
                </Typography>
              </Grid>
              <Box>
                <Button variant="outlined" onClick={handleLogout}>
                  {t("logout")}
                </Button>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
