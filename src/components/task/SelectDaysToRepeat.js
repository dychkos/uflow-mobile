import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, Text } from '@ui-kitten/components';
import { DAYS_ARRAY } from '../../app/enums';

export const SelectDaysToRepeat = ({ onSelect, selectedIndexes, error = null }) => {
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
