import React from 'react'
import { Input, Dropdown, Icon, Menu, Button } from 'semantic-ui-react'
import { LocationBtn } from './LocationBtn';

const Filter = ({ location, handleFilters, filters }) => {

    const options = [
        { key: 'ztm', text: 'ZTM Gdańsk', value: 'ztm' },
        { key: 'zkm', text: 'ZKM Gdynia', value: 'zkm' },
        { key: 'all', text: 'Wszyscy', value: 'all' }
    ]

    return <Menu
        borderless
        fixed='bottom'>
        <Menu.Item fitted >
            <LocationBtn location={location} />
        </Menu.Item>
        <Menu.Item fitted >
            <Input
                placeholder='Wyszukaj...'
                name='search'
                icon={filters.search.length > 0 && <Icon name='cancel' circular link onClick={() => handleFilters('search', '')} />}
                value={filters.search}
                onChange={({ target }) => handleFilters('search', target.value.toLowerCase())}
            />
        </Menu.Item>
        <Menu.Item fitted >
            <Button
                color={filters.favs && "red"}
                icon='heart'
                basic
                onClick={() => handleFilters("favs", !filters.favs)}
            />
        </Menu.Item>
        <Menu.Item fitted position='right'>
            <Dropdown
                placeholder='Przewoźnik'
                selection
                options={options}
                onChange={(e, { value }) => handleFilters('operators', value)}
                value={filters.operators}
            />
        </Menu.Item>
    </Menu>
}

export { Filter }
