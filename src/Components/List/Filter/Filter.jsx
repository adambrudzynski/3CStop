import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const Filter = ({search, name}) => {
const handleChange = (event) =>{
    event.preventDefault()
    search(event.target.value.toLowerCase());
    
}
    return <Form>
        <Form.Group>
            <Form.Input
                placeholder='Wyszukaj...'
                name='search'
                value={name}
                onChange={handleChange}
            />
        </Form.Group>
    </Form>


}

export { Filter }
