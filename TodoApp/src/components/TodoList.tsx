import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { DeleteIcon } from 'lucide-react';


type TodoListProps = {
    todos: { id: string; title: string }[],
    onRemoveTodo: (id: string) => void
}


const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo }) => {
    return (
        <div className='grid grid-cols-5 gap-4 my-5'>

            {
                todos.map((todo) => (
                    <Card className=' flex flex-row justify-between items-center'>
                        <CardHeader>
                            <CardTitle>{todo.title}</CardTitle>
                        </CardHeader>
                        <Button onClick={()=>onRemoveTodo(todo.id)} className='mr-4 cursor-pointer' variant={'destructive'} size={"icon"}> <DeleteIcon /></Button>

                    </Card>
                ))
            }
        </div>
    )
}

export default TodoList