import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Layout, Popover, Text } from '@ui-kitten/components';
import React from 'react';
import { useApp } from '../store/useApp';
import { useNavigation } from '@react-navigation/native';

export const AddButton = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleFlowPopup = useApp((state) => state.toggleAddingFlow);
  const navigation = useNavigation();

  const renderToggleButton = () => (
    <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );

  const hide = () => {
    setVisible(false);
  };

  const moveToCreatingTask = () => {
    hide();
    navigation.navigate('Create Task');
  };

  const openFlowPopup = () => {
    hide();
    toggleFlowPopup();
  };

  return (
    <Popover
      visible={visible}
      anchor={renderToggleButton}
      placement="top start"
      fullWidth={true}
      onBackdropPress={() => setVisible(false)}>
      <Layout style={styles.content}>
        <Button style={styles.button} onPress={moveToCreatingTask} appearance="ghost" status="primary">
          Add task
        </Button>
        <Button style={styles.button} onPress={openFlowPopup} appearance="ghost" status="primary">
          Add flow
        </Button>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  button: {
    margin: 2,
    width: '100%'
  },
  addTask: {
    width: '100%',
    height: 20
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 170,
    paddingHorizontal: 9,
    paddingVertical: 8
  },
  avatar: {
    marginHorizontal: 4
  }
});
