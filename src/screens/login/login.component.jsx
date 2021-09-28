import React from "react";
import { View, Image } from "react-native";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { CheckBox } from "react-native-elements";

import styles from "./login.style";

import Logo from "../../../assets/Logo.png";

const Login = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.form}>
        <FormInput label="Login:" />
        <FormInput label="Senha:" type="password" />
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
        <CustomButton text="Entrar" />
      </View>
    </View>
  );
};

export default Login;
