import axios from "axios";
import {User, UsersResponse} from "./User";

const axiosInstance = axios.create({
    baseURL: "http://nesimi.local:8000/api/v1"
});
export const fetchUsers = async () => {
    try {
        const response = await axiosInstance.get("users/", {params: {format: "json"}});
        const usersData = response.data;
        const parsedUsers = usersData.results.map(userData => new User(
            userData.id,
            userData.objectSid,
            userData.distinguishedName,
            userData.servicePrincipalName,
            userData.securityDescriptor,
            userData.whenCreated,
            userData.pwdLastSet,
            userData.genericAll,
            userData.writeDacl
        ));
        return new UsersResponse(
            usersData.count,
            usersData.next,
            usersData.previous,
            parsedUsers
        );
    } catch (error) {
        console.log(error);
    }
};
