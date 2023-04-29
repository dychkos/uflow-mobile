import { Spinner, Text } from '@ui-kitten/components';
import BaseLayout from '../components/BaseLayout';
import { useTasks } from '../store/useTasks';
import { useAppHook } from '../hooks/useAppHook';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TaskList } from '../components/Task/TaskList';
import { LoadingIndicator } from '../components/LoadingIndicator';

export default () => {
  const [tasks, error, loading] = useTasks((state) => [state.tasks, state.error, state.loading]);
  const app = useAppHook();

  useEffect(() => {
    app.initDaily();
    console.log('reopen');
  }, []);

  return (
    <BaseLayout mode={'flow'}>
      {error ? <Text status="danger">{error}</Text> : ''}
      {loading ? <LoadingIndicator status={'info'} /> : <TaskList data={tasks} isFlow={true} />}
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
