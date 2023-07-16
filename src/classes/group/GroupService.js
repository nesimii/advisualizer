import axios from "axios";
import {Group, GroupsResponse} from "./Group";

const axiosInstance = axios.create({
    baseURL: "http://nesimi.local:8000/api/v1"
});
export const fetchGroups = async () => {
    try {
        return await axiosInstance.get("groups/", {params: {format: "json"}})
            .then(response => {
                const groupsData = response.data;
                const parsedGroups = groupsData.results.map(groupData => new Group(
                    groupData.id,
                    groupData.objectSid,
                    groupData.distinguishedName,
                    groupData.description,
                    groupData.whenCreated,
                    groupData.securityDescriptor,
                    groupData.genericAll,
                    groupData.writeDacl
                ));
                return new GroupsResponse(
                    groupsData.count,
                    groupsData.next,
                    groupsData.previous,
                    parsedGroups
                );
            });

    } catch (e) {
        console.log(e);
    }
}