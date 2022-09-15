import { StatusBar } from 'expo-status-bar';
import * as S from './styles'
import Card from './components/Card'
import { Keyboard, Platform, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function App() {
    const [task, setTask] = useState<string>()
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskList(oldTaskList => [...oldTaskList, task!])
        setTask('')
    }
    
    const removeItem = (index: number) => {
        const taskListCopy = [...taskList]
        taskListCopy.splice(index, 1)

        setTaskList(taskListCopy)
    }
    
    return (
        <S.View>
            <S.Title>Today's tasks</S.Title>

            <S.List>
                {
                    taskList.map((text, index) => (
                        <TouchableOpacity key={text+index} onPress={() => removeItem(index)}>
                            <Card text={text}/>
                        </TouchableOpacity>
                    ))
                }
            </S.List>

            <S.InputWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <S.Input placeholder='Write a task' value={task} onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={handleAddTask}>
                    <S.Button>
                        <S.Icon>+</S.Icon>
                    </S.Button>
                </TouchableOpacity>
            </S.InputWrapper>

            <StatusBar style="auto" />
        </S.View>
    );
}