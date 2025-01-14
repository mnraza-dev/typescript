import { Input } from './ui/input'
import { Button } from './ui/button'
import React from 'react'

const AddTodo: React.FC = () => {
    return (
        <form className='flex gap-5 items-center'>
            <Input type="text" placeholder="Add a todo" className='w-fit' />
            <Button variant={"default"}>Add Todo</Button>
        </form>
    )
}

export default AddTodo