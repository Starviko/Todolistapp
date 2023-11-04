import ToDo from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
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
        <MainLayout>
            <View>
                <ToDo tasks={tasks} />
                <ToDoForm addTask={addTask} />   
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
      
        
    );
}