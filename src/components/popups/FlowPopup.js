import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Modal, Text } from '@ui-kitten/components';
import { useApp } from '../../store/useApp';
import { CloseIcon, StatsIcon } from '../icons';
import { LoadingIndicator } from '../ui/LoadingIndicator';
import { useFlow } from '../../store/useFlow';
import ErrorMessage from '../ui/ErrorMessage';

const FlowPopup = () => {
  const [visible, toggleVisible] = useApp((state) => [state.addingFlow, state.toggleAddingFlow]);
  const [flowName, setFlowName] = useState('');
  const [create, loading, error, currentFlow] = useFlow((state) => [
    state.createFlow,
    state.loading,
    state.error,
    state.currentFlow
  ]);

  const onClose = () => {
    setFlowName('');
    toggleVisible();
  };

  const handleButtonPress = async () => {
    // do something with flowName
    await create({
      title: flowName
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={!!currentFlow ? onClose : () => {}}>
      <View style={styles.modal}>
        {!!currentFlow && (
          <CloseIcon style={{ width: 32, height: 32, marginLeft: 'auto' }} fill="#000" onPress={onClose} />
        )}
        <View style={styles.body}>
          <Text category="h4" style={styles.title}>
            Create a new flow
          </Text>
          <StatsIcon style={styles.icon} fill="#8F9BB3" />
          <Input label="Flow Name" style={styles.input} value={flowName} onChangeText={setFlowName} />
          {error && <ErrorMessage message={error} />}
        </View>
        <View style={styles.navigation}>
          <Button
            onPress={handleButtonPress}
            accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
            disabled={loading}>
            Create
          </Button>
          {/*<Button style={styles.closeButton} appearance="ghost" onPress={toggleVisible}>*/}
          {/*  Close*/}
          {/*</Button>*/}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 320,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8
  },
  navigation: {
    marginTop: 16
  },
  title: {
    textAlign: 'center',
    marginBottom: 24
  },
  input: {
    marginTop: 16
  },
  icon: {
    height: 48,
    width: 48,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  closeButton: {
    marginTop: 8
  }
});

export default FlowPopup;
