import React, { useState } from "react";
import { View, Image } from "react-native";
import { useHistory } from "react-router-native";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import styles from "./register.styles";

import Logo from "../../../assets/Logo.png";

const Register = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const history = useHistory();

  const validar = () => {
    let error = false;
    setUserNameError(false);
    setPasswordError(false);
    setNameError(false);
    setPhoneError(false);

    if (name === null) {
      setNameError(true);
      error = true;
    }

    if (password === null) {
      setPasswordError(true);
      error = true;
    }

    if (userName === null) {
      setUserNameError(true);
      error = true;
    }

    if (phone === null) {
      setPhoneError(true);
      error = true;
    }

    return !error;
  };

  const handleCreate = () => {
    if (validar()) {
      history.push("/Feed");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.form}>
        <FormInput
          label="Nome:"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          error={nameError}
          errorMessage="Nome é obrigatorio!"
        />
        <FormInput
          label="Senha:"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          error={passwordError}
          errorMessage="Senha é obrigatorio!"
        />
        <FormInput
          label="Nome de Usuários:"
          handleChange={(e) => setUserName(e.target.value)}
          value={userName}
          error={userNameError}
          errorMessage="Nome de Usuário é obrigatorio!"
        />
        <FormInput
          label="Telefone:"
          keyboard="number"
          handleChange={(e) => setPhone(e.target.value)}
          value={phone}
          error={phoneError}
          errorMessage="Telefone é obrigatorio!"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton text="Criar" handlePress={handleCreate} />
        <CustomButton
          style={styles.cancelButton}
          text="Cancelar"
          handlePress={() => history.push("/")}
        />
      </View>
    </View>
  );
};

export default Register;
