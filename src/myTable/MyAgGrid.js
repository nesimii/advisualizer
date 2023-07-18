import React, {useEffect, useState} from 'react';

import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

const MyAgGrid = ({classType, funcType}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const getData = (url) => {
        try {
            setLoading(true);
            funcType(url).then(result => setData(result));
        } catch (e) {
            debugger;
            setLoading(false);
        }
    }

    useEffect(() => {
        getData(null);
    }, []);

    const groupProperties = Object.keys(classType);
// Kolonları oluştur
    const columnDefs = groupProperties.map(property => {
        return {
            headerName: property, field: property
        };
    });

    const gridOptions = {
        defaultColDef: {
            flex: 1,
            minWidth: 100,
        },
        animateRows: true,
    }

    {
        if (data === null) {
            return <div>Loading...</div>;
        }


        if (!data || !data.dataList) {
            return <div>Sorry, no data available.</div>;
        }
    }

    return (<>
        <div className="ag-theme-balham" style={{height: 400, width: '100%'}}>
            <AgGridReact
                rowData={data.dataList}
                columnDefs={columnDefs}
                gridOptions={gridOptions}
            >
            </AgGridReact>
            <br/>
            <div>
                <input type="button" value={'previous'} disabled={!data.previous}
                       onClick={() => getData(data.previous)}/>

                <input type="button" value={'next'} disabled={!data.next}
                       onClick={() => getData(data.next)}/>
            </div>
        </div>
    </>);
};

export default MyAgGrid;
