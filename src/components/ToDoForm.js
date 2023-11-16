import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import { useEffect } from 'react';

export default function ToDoForm({addTask})
{
  // const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [selectedTask, setSelectedTask] = React.useState(null);

  const fetchTasks = async () => {
    try{
      const response = await fetch("../data/tasks.json");
      const data = await response.json();
      setTasks(data);
    }
    catch(error){
      console.error(error);
    }}

  useEffect(() => {fetchTasks();}, []);
  const handleAddTask = () => {
    if(tasks.length > 0){
      const tasksIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[tasksIndex];
      //const randomTask = tasks[randomIndex].taskName;
      setSelectedTask(randomTask);}}


  // const handleChange = (e) => {
  //   e.preventDefault();
  //   addTask(taskText);
  //   setTaskText('');}
  
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          // onChangeText={(text) => setTaskText(text)}
          value = {selectedTask}
        />
        <Button title="Add Text" onPress={handleAddTask} />
      </View>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });