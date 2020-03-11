import React from 'react'
import { Form, Sticky } from 'semantic-ui-react'

const Filter = ({ search, name, stickyContext, operator, handleOperator }) => {
    const handleChange = ({target}) => {
        search(target.value.toLowerCase());
    }

    const handleDropdownChange = (e, {value}) => {
        console.log(value);
        handleOperator(value)
        
    }

    const options = [
        { key: 'ztm', text: 'ZTM Gdańsk', value: 'ztm' },
        { key: 'zkm', text: 'ZKM Gdynia', value: 'zkm' }
    ]

    return <Sticky context={stickyContext}>
        <Form >
            <Form.Group >
                <Form.Input
                    placeholder='Wyszukaj...'
                    name='search'
                    icon='search'
                    iconPosition='left'
                    value={name}
                    onChange={handleChange}
                />
                <Form.Dropdown
                    placeholder='Przewoźnik'
                    multiple
                    selection
                    options={options}
                    onChange={handleDropdownChange}
                    value={operator}
                />
            </Form.Group>
        </Form>
    </Sticky>

}

export { Filter }
