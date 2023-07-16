import axios from "axios";
import {Computer, ComputersResponse} from "./Computer";

const axiosInstance = axios.create({
    baseURL: "http://nesimi.local:8000/api/v1"
});
export const fetchComputers = async () => {
    try {
        const response = await axiosInstance.get("computers/", {params: {format: "json"}});
        const computersData = response.data;
        const parsedComputers = computersData.results.map(computerData => new Computer(
            computerData.id,
            computerData.objectSid,
            computerData.distinguishedName,
            computerData.operatingSystem,
            computerData.securityDescriptor,
            computerData.whenCreated
        ));
        return new ComputersResponse(
            computersData.count,
            computersData.next,
            computersData.previous,
            parsedComputers
        );
    } catch (e) {
        console.log(e);
    }
};