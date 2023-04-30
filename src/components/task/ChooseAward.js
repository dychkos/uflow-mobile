import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, Text } from '@ui-kitten/components';

const DAYS_ARRAY = [
  { key: 1, value: 'Mo' },
  { key: 2, value: 'Tu' },
  { key: 3, value: 'We' },
  { key: 4, value: 'Th' },
  { key: 5, value: 'Fr' },
  { key: 6, value: 'Sa' },
  { key: 7, value: 'Su' }
];

export const ChooseAward = ({ onSelect, selectedIndexes, error = null }) => {
  return (
    <>
      <ButtonGroup
        size={'small'}
        appearance="outline"
        status={error ? 'danger' : 'info'}
        style={styles.daysGroup}>
        {DAYS_ARRAY.map((day) => (
          <Button
            key={day.key}
            style={[styles.day, selectedIndexes.includes(day.key) && styles.dayCheck]}
            onPress={() => onSelect(day.key)}>
            {day.value}
          </Button>
        ))}
      </ButtonGroup>
      {error && (
        <Text status="danger" category={'c2'}>
          {error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  day: {
    maxWidth: '100%'
  },

  daysGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },

  dayCheck: {
    backgroundColor: '#74cdb8'
  }
});
