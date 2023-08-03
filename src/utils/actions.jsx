import { redirect } from "react-router-dom";
import {
  saveToLocalStorage,
  deleteItem,
  saveSearchResults,
} from "../utils/localStorage";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  formData.get("email");
  console.log(request);
  saveToLocalStorage({
    key: formData.get("email"),
    value: formData.get("password"),
  });

  return redirect("/");
};

export const logoutAction = async () => {
  deleteItem({ key: "login" });
  return redirect("/login");
};

export const searchAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();

  saveSearchResults({
    keyword: data.get("keyword"),
    address: data.get("address"),
    category: data.get("category"),
  });

  return redirect("/searchResults");
};
