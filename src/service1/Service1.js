import {useQuery} from "react-query";
import {fetchGroups} from "../classes/group/GroupService";

export const GetGroups = (url) => {
    let key = 'groups';
    if (url !== null) key = url;
    const {
        isLoading, error, data
    } = useQuery([key, url], () => fetchGroups(url));

    // Verileri döndür
    return {isLoading, error, groupData: data};
}


