import React from 'react';
import {useQuery} from "react-query";
import {fetchUsers} from "../classes/user/UserService";
import {fetchComputers} from "../classes/computer/ComputerService";
import {fetchGroups} from "../classes/group/GroupService";


const AxiosExample = () => {
    let key = 'groups';
    let url = null;
    const {
        data: groupsResponse,
        isLoading: groupsLoading,
        isError: groupsError
    } = useQuery([key, url], () => fetchGroups(url));
    const {
        data: usersResponse,
        isLoading: usersLoading,
        isError: usersError
    } = useQuery('users', fetchUsers);
    const {
        data: computersResponse,
        isLoading: computersLoading,
        isError: computersError
    } = useQuery('computers', fetchComputers);

    if (groupsLoading || usersLoading || computersLoading) {
        return <div>Loading...</div>;
    }

    if (groupsError || usersError || computersError) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <div>
            <h3>Group List</h3>
            <ul>

                {groupsResponse ? (
                    groupsResponse.groupList.length > 0 ? (
                        groupsResponse.groupList.map((group) => <li key={group.id}>{group.distinguishedName}</li>)
                    ) : (
                        <li>No groups found.</li>
                    )
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
            <h3>User List</h3>
            <ul>
                {usersResponse ? (
                    usersResponse.userList.length > 0 ? (
                        usersResponse.userList.map((user) => <li key={user.id}>{user.distinguishedName}</li>)
                    ) : (
                        <li>No users found.</li>
                    )
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
            <h3>Computer List</h3>
            <ul>
                {computersResponse ? (
                    computersResponse.computerList.length > 0 ? (
                        computersResponse.computerList.map((computer) => <li
                            key={computer.id}>{computer.distinguishedName}</li>)
                    ) : (
                        <li>No computers found.</li>
                    )
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
        </div>
    );

};

export default AxiosExample;
