import React from 'react'
import { Input, Dropdown, Icon, Menu, Visibility } from 'semantic-ui-react'
import { LocationBtn } from './LocationBtn';

const Filter = ({ search, name, operator, handleOperator, location, filterVisibility }) => {

    const handleVisibility = (e, { calculations }) => {
        filterVisibility(calculations)
        console.log(calculations);

    }


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

    return         <Visibility as={Menu} onUpdate={handleVisibility} borderless fixed='bottom'>
            <Menu.Item fitted >
                <LocationBtn location={location} />
            </Menu.Item>
            <Menu.Item fitted >
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

                    placeholder='Przewoźnik'
                    selection
                    options={options}
                    onChange={handleDropdownChange}
                    value={operator}
                />
            </Menu.Item>
        </Visibility>
   


}

export { Filter }
