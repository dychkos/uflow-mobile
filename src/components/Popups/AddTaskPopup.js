import React from 'react';
import { Modal, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { useApp } from '../../store/useApp';
import { InitialStep, HowOftenStep, ChooseAwardStep } from './steps';
import { ModalStepLayout } from './layouts';

const steps = {
  INITIAL: {
    index: 0,
    title: 'Let`s add new task',
    component: (props) => <InitialStep {...props} />
  },
  HOW_OFTEN: {
    index: 1,
    title: 'How often?',
    component: (props) => <HowOftenStep {...props} />
  },
  AWARD: {
    index: 2,
    title: 'Choose award',
    component: (props) => <ChooseAwardStep {...props} />
  }
};

export const AddTaskPopup = () => {
  const [visible, toggleVisible] = useApp((state) => [state.addingTask, state.toggleAddingTask]);
  const [step, setStep] = React.useState(steps.INITIAL.index);

  const incrementStep = () => {
    if (step === steps.AWARD.index) return;
    setStep(step + 1);
  };

  const decrementStep = () => {
    if (step === steps.INITIAL.index) return;
    setStep(step - 1);
  };

  const allowedBackButton = () => step !== steps.INITIAL.index;

  const getCurrentStep = () => {
    const [currentStep] = Object.values(steps).filter((s, i) => {
      if (step === i) {
        return s;
      }
    });
    return currentStep;
  };

  return (
    <Modal visible={visible} backdropStyle={styles.backdrop}>
      <ModalStepLayout
        title={getCurrentStep().title}
        onClose={toggleVisible}
        onBackClick={allowedBackButton() ? decrementStep : false}>
        {Object.values(steps)
          .map((s, i) => {
            if (step === i) {
              const Component = s.component;
              return <Component onNextClick={incrementStep} key={s.index} />;
            }
            return null;
          })
          .filter(Boolean)}
      </ModalStepLayout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});
