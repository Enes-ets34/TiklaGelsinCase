import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./src/store";
import AppNavigator from "./src/navigation/AppNavigator";
import CustomModal from "./src/screens/components/shared/Modal";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

function AppContainer() {
  //@ts-ignore
  const { showModal, message,icon } = useSelector((state) => state.modal);

  return (
    <>
      <CustomModal message={message} visible={showModal} icon={icon}  />
      <AppNavigator />
    </>
  );
}
