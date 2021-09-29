import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Route, useHistory } from "react-router-native";

import { LinearProgress } from "react-native-elements";

import Login from "../screens/login/login.component";
import Feed from "../screens/feed/feed.component";
import Register from "../screens/register/register.component";

import storage from "../storage/storage";

const Routes = () => {
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  useEffect(() => {
    storage.getData().then((response) => {
      if (response) {
        response.keepConnected ? history.push("/Feed") : history.push("/");
      }
      setLoading(false);
    });
  }, []);

  return (
    <View>
      {loading ? (
        <LinearProgress color="#999" />
      ) : (
        <View>
          <Route exact path="/Feed">
            <Feed />
          </Route>

          <Route exact path="/Register">
            <Register />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </View>
      )}
    </View>
  );
};

export default Routes;
