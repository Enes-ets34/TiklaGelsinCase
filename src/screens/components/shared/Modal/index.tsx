import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import {modalStyles} from './styles/modalStyles';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../../store/actions/modalActions';

type Props = {
  visible: boolean;
  message: string;
};

const CustomModal: React.FC<Props> = ({ visible, message }) => {
    const dispatch = useDispatch()
    const onClose = () =>{
        dispatch(hideModal())
    }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.container}>
        <View style={modalStyles.modalContent}>
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
