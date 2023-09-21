import { Box, Card, CardActions, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import imageSrc from "./material/welcome.jpg";
import LangSwitch from "../../Components/LangSwitch";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ maxWidth: 345 }}>
        <LangSwitch />
        <CardMedia
          component="img"
          height="400"
          image={imageSrc}
          alt="welcome image"
          style={{ objectFit: "contain" }}
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={() => navigate("/login")}>
            {t("login")}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default WelcomePage;
