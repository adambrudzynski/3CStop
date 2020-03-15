import React from 'react'
import { Input, Dropdown, Icon, Menu } from 'semantic-ui-react'

const Filter = ({ search, name, operator, handleOperator }) => {
    const handleChange = ({ target }) => {
        search(target.value.toLowerCase());
    }

    const handleClear = () => {
        search('')
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

    return <Menu compact borderless fixed='bottom' >
        <Menu.Item fitted>
            <Input
                placeholder='Wyszukaj...'
                name='search'
                icon={name.length > 0 && <Icon name='cancel' circular link onClick={handleClear} />}
                value={name}
                onChange={handleChange}
            />
        </Menu.Item>
        <Menu.Item fitted position='right'>
            <Dropdown
                compact
                placeholder='Przewoźnik'
                selection
                options={options}
                onChange={handleDropdownChange}
                value={operator}
            />
        </Menu.Item>
    </Menu>

}

export { Filter }
