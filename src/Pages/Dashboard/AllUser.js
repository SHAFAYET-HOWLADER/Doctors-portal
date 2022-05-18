import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DisplayUser from './DisplayUser';

const AllUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>           
            <div>
                {
                    users.map((user, index) => <DisplayUser
                        key={index}
                        user={user}
                        refetch={refetch}
                    ></DisplayUser>)
                }
            </div>
        </div>
    );
};

export default AllUser;