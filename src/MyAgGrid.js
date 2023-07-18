import React, {useEffect, useState} from 'react';
import {Group} from "./classes/group/Group";

import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {GetGroups} from "./service1/Service1";
import {useQuery} from "react-query";
import {fetchGroups} from "./classes/group/GroupService";

const MyAgGrid = ({classType, funcType}) => {
    const [data, setData] = useState(null);

    const getGroups = (url) => {
        funcType(url).then(result => setData(result));
    }

    useEffect(() => {
        getGroups(null);
    }, []);

    const getGroupData = (newUrl) => {
        getGroups(newUrl);
    };

    const groupProperties = Object.keys(classType);
// Kolonları oluştur
    const columnDefs = groupProperties.map(property => {
        return {
            headerName: property, field: property
        };
    });

    {
        // if (groupData === null) {
        //     return <div>Loading...</div>;
        // }

        // if (error) {
        //     return <div>Error occurred while fetching data</div>;
        // }

        if (!data || !data.groupList) {
            return <div>Sorry, no data available.</div>;
        }
    }

    return (<>
        <div className="ag-theme-alpine" style={{height: 400}}>
            <AgGridReact
                rowData={data.groupList}
                columnDefs={columnDefs}
                animateRows={true}>
            </AgGridReact>
            <div>
                <input type="button" value={'previous'} disabled={!data.previous}
                       onClick={() => getGroupData(data.previous)}/>

                <input type="button" value={'next'} disabled={!data.next}
                       onClick={() => getGroupData(data.next)}/>
            </div>
        </div>
    </>);
};

export default MyAgGrid;
