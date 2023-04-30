import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CoinIcon, DecremIcon, IncremIcon } from '../components/icons';
import { useTasksStore } from '../store/useTasksStore';
import { useFlow } from '../store/useFlow';
import ErrorMessage from '../components/ui/ErrorMessage';
import { LoadingButton } from '../components/ui/buttons/LoadingButton';
import { InputField } from '../components/ui/InputField';
import { ScrollView } from 'react-native';
import { ChooseAward } from '../components/task/ChooseAward';
import { Helper } from '../services/Helper';
import { useNavigation } from '@react-navigation/native';

const defaultTask = {
  action: '',
  how_many: 0,
  unit: '',
  reward: 1,
  days: []
};

export default () => {
  const navigation = useNavigation();

  const [task, setTask] = useState(defaultTask);
  const [errors, setErrors] = useState({});

  const flow = useFlow((state) => state.currentFlow);
  const [createTask, loading, error] = useTasksStore((state) => [state.create, state.loading, state.error]);

  const handleInputChange = (key, value) => {
    clearError(key);
    let updatedValue = {};
    updatedValue = { [key]: value };
    setTask((task) => ({
      ...task,
      ...updatedValue
    }));
  };

  const selectDay = (dayIdx) => {
    clearError('days');

    if (task.days.includes(dayIdx)) {
      setTask({ ...task, days: task.days.filter((item) => item !== dayIdx) });
    } else {
      setTask({ ...task, days: [...task.days, dayIdx] });
    }
  };

  const clearError = (field) => {
    setErrors((state) => ({ ...state, [field]: null }));
  };

  const allowDecrement = () => task.reward > 1;
  const allowIncrement = () => task.reward < 3;

  const decrement = () => {
    if (allowDecrement()) {
      setTask({ ...task, reward: task.reward - 1 });
    }
  };

  const increment = () => {
    if (allowIncrement()) {
      setTask({ ...task, reward: task.reward + 1 });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!task.action) {
      newErrors.action = 'Describe to do action.';
    }

    if (!task.how_many) {
      newErrors.how_many = 'Input how much action need to do.';
    }

    if (task.how_many && !Helper.isValidInteger(task.how_many)) {
      newErrors.how_many = 'Input should be a numeric';
    }
    console.log('jow', task.how_many);

    if (!task.unit) {
      newErrors.unit = 'Describe what thing should be done.';
    }

    if (!task.days.length) {
      newErrors.days = 'Choose day to repeat the task.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm() && flow.id) {
      await createTask(Helper.prepareTaskToDto(task), flow.id);
      navigation.navigate('Home');
    }
  };

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <Text category="h2">Create a new task</Text>

        <View style={styles.inputs}>
          <InputField
            placeholder="What to do?"
            style={[styles.inputItem]}
            value={task.action}
            error={errors.action}
            onChangeText={(text) => handleInputChange('action', text)}
          />
          <InputField
            placeholder="How much?"
            style={[styles.inputItem]}
            value={String(task.how_many)}
            keyboardType="numeric"
            error={errors.how_many}
            onChangeText={(text) => handleInputChange('how_many', text)}
          />
          <InputField
            placeholder="What thing?"
            style={[styles.inputItem]}
            value={task.unit}
            error={errors.unit}
            onChangeText={(text) => handleInputChange('unit', text)}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text category="h6">How often ?</Text>

          <ChooseAward selectedIndexes={task.days} onSelect={selectDay} error={errors.days} />
        </View>

        <View style={styles.itemContainer}>
          <Text category="h6">Choose award</Text>

          <CoinIcon style={styles.coinIcon} fill="#000" />
          <View style={styles.coinContainer}>
            <DecremIcon
              fill={allowDecrement() ? '#000' : '#ababa0'}
              onPress={decrement}
              style={styles.actionIcon}
            />

            <Text category="h1"> {task.reward} </Text>
            <IncremIcon
              fill={allowIncrement() ? '#000' : '#ababa0'}
              onPress={increment}
              style={styles.actionIcon}
            />
          </View>
        </View>

        {error && <ErrorMessage message={error} />}

        <LoadingButton onPress={handleSubmit} style={[styles.button]} loading={loading}>
          Create task
        </LoadingButton>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20
  },
  button: {
    // marginTop: 'auto',
    marginVertical: 24
  },

  inputs: {
    display: 'flex',
    width: '100%',
    marginTop: 16
  },
  inputItem: {
    marginVertical: 5
  },

  itemContainer: {
    marginVertical: 9
  },

  coinContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coinIcon: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
    marginTop: 16
  },
  actionIcon: {
    width: 30,
    height: 30
  }
});
