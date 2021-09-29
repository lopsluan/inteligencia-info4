import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@Login", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@Login");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("@Login");
  } catch (e) {
    console.log(e);
  }
};

export default { storeData, getData, removeValue };
