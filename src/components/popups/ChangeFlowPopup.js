import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Modal, Radio, RadioGroup, Text } from '@ui-kitten/components';
import { useApp } from '../../store/useApp';
import { StatsIcon } from '../icons';
import { LoadingIndicator } from '../ui/LoadingIndicator';
import { useFlow } from '../../store/useFlow';
import ErrorMessage from '../ui/ErrorMessage';
import { useEffect } from 'react/index';

const ChangeFlowPopup = () => {
  const [visible, toggleVisible] = useApp((state) => [state.changingFlow, state.toggleChangingFlow]);
  const [flowsList, loading, error, fetchFlows, currentFlow, updateFlow] = useFlow((state) => [
    state.list,
    state.loading,
    state.error,
    state.fetchFlowList,
    state.currentFlow,
    state.updateFlow
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (visible) {
      fetchFlows();
      setSelectedIndex(flowsList.findIndex((flow) => flow.id === currentFlow.id));
    }
  }, [visible]);

  const handleSubmit = async () => {
    await updateFlow({ ...flowsList[selectedIndex], chosen: true });
    toggleVisible();
  };

  return (
    <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={toggleVisible}>
      <View style={styles.modal}>
        <View style={styles.body}>
          <Text category="h4" style={styles.title}>
            Change current flow
          </Text>
          {loading ? (
            <LoadingIndicator status="info" />
          ) : (
            <View>
              <RadioGroup selectedIndex={selectedIndex} onChange={(index) => setSelectedIndex(index)}>
                {flowsList.map((flow, idx) => (
                  <Radio key={flow.id}> {flow.title} </Radio>
                ))}
              </RadioGroup>
            </View>
          )}
          {error && <ErrorMessage message={error} />}
        </View>
        <View style={styles.navigation}>
          {flowsList.length > 0 && (
            <Button
              onPress={handleSubmit}
              accessoryLeft={() => (loading ? <LoadingIndicator /> : null)}
              disabled={loading}>
              Submit
            </Button>
          )}
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

export default ChangeFlowPopup;
