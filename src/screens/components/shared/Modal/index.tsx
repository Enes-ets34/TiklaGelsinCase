import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { modalStyles } from "./styles/modalStyles";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../store/actions/modalActions";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 

type Props = {
  visible: boolean;
  message: string;
  icon: string;
};

const CustomModal: React.FC<Props> = ({ visible, message, icon }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(hideModal());
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.container}>
        <View style={modalStyles.modalContent}>
          {(icon === "success" && (
            <AntDesign style={modalStyles.modalIcon} name="checkcircle" color="green" />
          )) ||
            (icon === "error" && (
              <MaterialIcons style={modalStyles.modalIcon} name="error" color="red" />
            ))}
          <Text style={modalStyles.modalText}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={modalStyles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
