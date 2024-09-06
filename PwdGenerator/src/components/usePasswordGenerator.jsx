import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const generatePassword = (length, checkboxData, passwordStrength) => {
    setPassword(null);
    setErrMsg(null);

    if (length === 0) {
      console.log("length", length);
      setErrMsg("Please enter valid length");
      return;
    }
    // length, checkbox checked data
    let generatedPassword = "";

    const checkedData = checkboxData.filter((field) => field.state);

    if (checkboxData.length === 0) {
      setErrMsg("No checkboxes selected");
      return;
    }
    for (let index = 0; index < length; index++) {
      // first select random  data
      const randomOption =
        checkedData[Math.floor(Math.random() * checkedData.length)];

      // for the random selected data, generate a password
      generatedPassword +=
        randomOption.charset[Math.floor(Math.random() * checkboxData.length)];
    }
    setPassword(generatedPassword);
    passwordStrength();
  };

  return { password, generatePassword, errMsg, setErrMsg };
};

export default usePasswordGenerator;
