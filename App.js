import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import uuidv4 from 'uuid/v4' 

import Header from './components/Header';
import NewTask from './components/NewTask';
import Task from './components/Task';
import EditTask from './components/EditTask';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      tasks: [],
      newTaskVisible: false,
      editTaskVisible: false,
      editItem: {}
    }
  }

  addTask = (task) =>{
    const { tasks } = this.state;
    const newTask = {id: uuidv4(), task: task, completed: false};
    const newTasks = [...tasks, newTask]

    this.setState({tasks: newTasks, newTaskVisible: false});
  }

  changeStatusTask = (id, estado) =>{
    const items = this.state.tasks.map(item => (
      item.id === id ? {...item, completed: estado} : item 
    ));
    this.setState({tasks: items })
  }
  
  renderItem =({item}) =>{
    return(
      <Task item={item} onComplete={this.changeStatusTask} onPress={() => {this.setState({editTaskVisible: true, editItem: item})}}/>
    )
  }
  render(){
    const{ newTaskVisible, tasks, editTaskVisible, editTask} = this.state;

    return(
      <View>
        <Header onAdd={() => this.setState({newTaskVisible: true})} />

        <NewTask visible={newTaskVisible} onCancel={() => this.setState({newTaskVisible: false})} onAdd={this.addTask}/>

        <EditTask visible={editTaskVisible} item={editItem}/>

        <FlatList
          data={tasks}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}/>
        <StatusBar barStyle="default"/>
      </View>
    )
  }
}

