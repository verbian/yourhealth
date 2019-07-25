import React from 'react';
import { Admin, Resource } from 'react-admin';
// import authProvider from './AdminAuth';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Users';
import { PostList, PostEdit, PostCreate } from './Posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import dataProvider from './dataProvider';


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


class AdminPage extends React.Component {
    render() {
        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
                <Resource name="users" list={UserList} icon={UserIcon} />
            </Admin>
        )
    }
}

export default AdminPage;