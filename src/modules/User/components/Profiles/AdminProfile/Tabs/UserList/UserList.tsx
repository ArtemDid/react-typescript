import React, {useState} from 'react';
import { Button, Input, Pagination, Select, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListWithAllUsersSelector, getUserSelector, pagesAllUsersSelector } from '../../../../../store/selectors';
import { deleteUser,fetchAllUsers } from '../../../../../store/actions';
import moment from 'moment';

const UserList = ()=>{

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const {allUsers} = useSelector(getListWithAllUsersSelector);
  const pages = useSelector(pagesAllUsersSelector)
  const user = useSelector(getUserSelector);
  const list = allUsers.filter(item => item.id !== user.id);

  
  let columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        className: "table-column-1",
        editable: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        className: "table-column-1",
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        className: "table-column-1",
      },  
      {
        title: 'Address',
        dataIndex: 'location',
        className: "table-column-1",
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        className: "table-column-1",
        render: (_: any, record: any) =>
        list.length >= 1 ? (
          <div className="deleteUserBtn">
            <Button className="table-column-action" type="primary" onClick={() => dispatch(deleteUser(record.id))} danger >Delete</Button>
          </div>
        ) : null,
      },
      {
        title: 'Created at',
        dataIndex: 'created_at',
        className: "table-column-3",
        render: (_: any, record:any) =>
        list.length >= 1 ? moment(record.created_at).format('MMMM Do YYYY') : null,
      },
    ];

    const onChange = (e:any) =>{
      dispatch(fetchAllUsers(e))
    }
  return(
      <div className="UserList">
        <Table
            className = 'table'
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={list}
            columns={columns}
            rowKey='id'
            pagination={false}
        />
        <Pagination
        onChange={onChange}
        total={pages*10}
      />
  </div>
  )

}
export default UserList
                