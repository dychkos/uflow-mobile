import { StyleSheet, View } from 'react-native';
import { BackIcon, CloseIcon } from '../../icons';
import { Text } from '@ui-kitten/components';
import React from 'react';

export const ModalStepLayout = ({ title, onClose, onBackClick, children }) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <View style={[styles.navigation, onBackClick && styles.navigationRow]}>
          {onBackClick && (
            <BackIcon style={{ width: 32, height: 32 }} fill="#000" onPress={onBackClick} />
          )}
          <CloseIcon
            style={{ width: 32, height: 32, marginLeft: 'auto' }}
            fill="#000"
            onPress={onClose}
          />
        </View>
        <Text category="h4" style={{ textAlign: 'center' }}>
          {title}
        </Text>
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    minHeight: 192,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    minWidth: 300
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: 16
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column'
  },
  navigationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
