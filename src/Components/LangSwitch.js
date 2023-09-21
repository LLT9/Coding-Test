import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/material";
import i18n from "../i18n/i18n";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../Features/Language/languageSlice";

const LangSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);

  const handleChangeLanguage = (language) => {
    dispatch(changeLang(language));
    i18n.changeLanguage(language); // Update i18next language outside the reducer
  };

  return (
    <Box display="flex" justifyContent="flex-end">
      <ButtonGroup
        variant="outlined"
        size="small"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleChangeLanguage("en")} type="button">
          Eng
        </Button>
        <Button onClick={() => handleChangeLanguage("zh")} type="button">
          繁
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LangSwitch;
