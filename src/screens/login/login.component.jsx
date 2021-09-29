import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { useHistory } from "react-router";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import storage from "../../storage/storage";

import styles from "./login.style";

import Logo from "../../../assets/Logo.png";

const Login = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();

  const validar = () => {
    let error = false;
    setUserNameError(false);
    setPasswordError(false);

    if (userName === null) {
      setUserNameError(true);
      error = true;
    }

    if (password === null) {
      setPasswordError(true);
      error = true;
    }

    return !error;
  };

  const handleLogin = (e) => {
    if (validar()) {
      if (isSelected) {
        storage.storeData({
          keepConnected: isSelected,
        });
      }
      history.push("/Feed");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.form}>
        <FormInput
          label="Login:"
          value={userName}
          handleChange={(e) => setUserName(e.target.value)}
          error={userNameError}
          errorMessage="Login é obrigatorio!"
        />
        <FormInput
          label="Senha:"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          errorMessage="Senha é obrigatorio!"
        />

        <CheckBox
          center
          title="Manter Conectado"
          checked={isSelected}
          checkedIcon="check-circle"
          uncheckedIcon="circle-o"
          containerStyle={styles.checkbox}
          checkedColor="black"
          onPress={() =>
            isSelected ? setIsSelected(false) : setIsSelected(true)
          }
          textStyle={styles.checkBoxText}
        />
        <View style={styles.buttonsContainer}>
          <CustomButton text="Entrar" handlePress={handleLogin} />
          <CustomButton
            text="Criar Conta"
            style={styles.registerButton}
            textStyle={styles.textStyle}
            handlePress={() => history.push("/Register")}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
