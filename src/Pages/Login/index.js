import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";
import { setLoginState } from "../../Features/User/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LangSwitch from "../../Components/LangSwitch";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { loginFormSchema } from "./formSchema";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateSchema: Yup.object().shape(loginFormSchema),
    onSubmit: (values) => {
      try {
        if (values.username !== "admin" || values.password !== "Admin&8181") {
          alert(t("login_error_message"));
          throw Error("username or password is not correct");
        }
        dispatch(setLoginState());
        navigate("/profile");
      } catch (error) {
        console.error("Caught an error:", error);
      }
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card>
        <LangSwitch />
        <Formik>
          <Form>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Stack
                component="form"
                sx={{
                  width: "25ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label={t("username")}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  error={formik.errors["username"]}
                  helperText={formik.errors["username"]}
                  name="username"
                />

                <TextField
                  label={t("password")}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.errors["password"]}
                  helperText={formik.errors["password"]}
                  name="password"
                  type="password"
                />
              </Stack>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <Button onClick={formik.handleSubmit}>{t("login")}</Button>
            </CardActions>
          </Form>
        </Formik>
      </Card>
    </Box>
  );
};

export default LoginPage;
