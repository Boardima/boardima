import * as React from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import ViewPopup from '../homeUniFilter/ViewPopup';
import EditPopup from './EditPopup';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function ViewBoarding() {

    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    const columns = [
        {
            field: "col1",
            headerName: "Owner Name",
            headerClassName: "header-class-name",
            width: 205,
        },
        {
            field: "col2",
            headerName: "Address",
            headerClassName: "header-class-name",
            width: 222,
        },
        {
            field: "col3",
            headerName: "Contact No",
            headerClassName: "header-class-name",
            width: 140,
        },
        {
            field: "col4",
            headerName: "Gender",
            headerClassName: "header-class-name",
            width: 90,
        },
        {
            field: "col5",
            headerName: "Description",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "col6",
            headerName: "Bus Route to UOC",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "col7",
            headerName: "Bus Route to UOM",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "col8",
            headerName: "Bus Route to USJ",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "col9",
            headerName: "Status",
            headerClassName: "header-class-name",
            width: 90,
        },
        {
            field: "col10",
            headerName: "View",
            headerClassName: "header-class-name",
            headerAlign: "center",
            width: 100,
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => {
                console.log(params.row)
                const onClick = (e) => { }
                return (
                    <ViewPopup userId={params.row.id} />
                );
            },
        },
        {
            field: "col11",
            headerName: "Edit",
            headerClassName: "header-class-name",
            headerAlign: "center",
            width: 100,
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => {
                console.log(params.row)
                const onClick = (e) => { }
                return (
                    <EditPopup userId={params.row.id} />
                );
            },
        },
    ];

    return (
        <div style={{ height: 510, width: '100%' }}>

            <DataGrid {...data}
                components={{
                    Toolbar: () => {
                        return (
                            <GridToolbarContainer sx={{ justifyContent: 'flex-end' }}>
                                {/* <GridToolbarExport sx={{color: "#008080"}}/> */}
                            </GridToolbarContainer>
                        )
                    }
                }}
                getRowHeight={() => '130px'} 
                columns={columns}
                sx={{
                    border: '1px solid #FFFFFF',
                }}
            />
        </div>
    );
}

export default ViewBoarding;
