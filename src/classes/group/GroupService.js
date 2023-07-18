import axios from "axios";
import {Group, GroupsResponse} from "./Group";

export const fetchGroups = async (url) => {
    try {
        let baseUrl = "http://localhost:8000/api/v1/groups/";
        if (url !== null) {
            baseUrl = url;
        }

        return await axios.get(baseUrl, {params: {format: "json"}})
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
