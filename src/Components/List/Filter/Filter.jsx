import React from 'react'
import { Form, Sticky } from 'semantic-ui-react'

const Filter = ({ search, name, stickyContext, operator, handleOperator }) => {
    const handleChange = ({ target }) => {
        search(target.value.toLowerCase());
    }

    const handleDropdownChange = (e, { value }) => {
        console.log(value);
        handleOperator(value)

    }

    const options = [
        { key: 'ztm', text: 'ZTM Gdańsk', value: 'ztm' },
        { key: 'zkm', text: 'ZKM Gdynia', value: 'zkm' },
        { key: 'all', text: 'Wszyscy', value: 'all' }
    ]

    return <Sticky context={stickyContext} >
        <Form >
            <Form.Group unstackable widths={2} >
                <Form.Input
                    placeholder='Wyszukaj...'
                    name='search'
                    icon='search'
                    iconPosition='left'
                    value={name}
                    onChange={handleChange}

                />
                <Form.Dropdown
                    compact
                    placeholder='Przewoźnik'
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
