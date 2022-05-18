import React from 'react';
import { toast } from 'react-toastify';

const DisplayUser = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAnAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('failed to made an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfully made admin ')
                }
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{email}</td>
                        <td>{role !== 'Admin' && <button class="btn btn-xs" onClick={makeAnAdmin}>Make Admin</button>}</td>
                        <td><button class="btn btn-xs">Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default DisplayUser;