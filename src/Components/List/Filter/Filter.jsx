import React from 'react'
import { Form, Sticky } from 'semantic-ui-react'

const Filter = ({ search, name, stickyContext }) => {
    const handleChange = (event) => {
        event.preventDefault()
        search(event.target.value.toLowerCase());
    }

    return <Sticky context={stickyContext}>
        <Form>
            <Form.Group>
                <Form.Input
                    placeholder='Wyszukaj...'
                    name='search'
                    value={name}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    </Sticky>

}

export { Filter }
