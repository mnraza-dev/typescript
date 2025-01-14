import { Input } from './ui/input'
import { Button } from './ui/button'
import React, { FormEvent, useState } from 'react'

type AddTodoProps = {
    onAddTodo: (todoText: string) => void
}
const AddTodo: React.FC<AddTodoProps> = ({onAddTodo}) => {
    const [text, setText] = useState<string>("");

    const changeEventhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value && setText(e.target.value);
    }
    const addTodo = (e: FormEvent) => {
        e.preventDefault();
        console.log(text);
        onAddTodo(text);
        setText('');

    }
    return (
        <form onSubmit={addTodo} className='flex gap-5 items-center'>
            <Input value={text} onChange={changeEventhandler} type="text" placeholder="Add a todo" className='w-full ' />
            <Button type='submit' onClick={addTodo} variant={"default"}>Add Todo</Button>
        </form>
    )
}

export default AddTodo