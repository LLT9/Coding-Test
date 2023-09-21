import * as Yup from "yup";
import i18n from "../../i18n/i18n";

export const loginFormSchema = {
  username: Yup.string().required(i18n.t("required")),
  password: Yup.string().required(i18n.t("required")),
};
