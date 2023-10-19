import { StatusBar } from 'expo-status-bar';

import React from 'react';
import {SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button} from 'react-native';
import ToDo from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog']);

  const addTask = (taskText) => {
    if(!tasks.includes(taskText)){
      setTasks([...tasks, taskText]);
    }
    
  }

  return (
    <SafeAreaView>
        <ToDo tasks={tasks} />
        <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}



export default App;
