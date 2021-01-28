import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(''); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

   const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
   };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalInputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.goalInput}
          onChangeText={goalInputHandler}
          value={props.enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    goalInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  goalInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default GoalInput;
