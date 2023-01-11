import * as React from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import ViewPopup from '../homeUniFilter/ViewPopup';
import EditPopup from './EditPopup';
import DeletePopup from './DeletePopup';
import Axios from "axios";

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

function ViewBoarding(props) {

    // const { data } = useDemoData({
    //     // dataSet: '',
    //     // visibleFields: VISIBLE_FIELDS,
    //     rowLength: 100,
    // });

    const rows = [
        {
            id: 1,
            col1: 'MUI',
            col2: 28000,
            col3: 28000,
            col4: 28000,
            col5: 28000,
            col6: 28000,
            col7: 28000,
            col8: 28000,
            col9: 28000,
        },
        {
            id: 2,
            id: 1,
            col1: 'MUI',
            col2: 28000,
            col3: 28000,
            col4: 28000,
            col5: 28000,
            col6: 28000,
            col7: 28000,
            col8: 28000,
            col9: 28000,
        },
    ];

    const columns = [
        {
            field: "ownerName",
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
        {
            field: "col12",
            headerName: "Delete",
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
                    <DeletePopup userId={params.row.id} />
                );
            },
        },
    ];

    const [boardingData, setboardingData] = React.useState([{}])


    React.useEffect(() => {
        Axios.get("http://localhost:5000/api/boardim")
            .then((response) => {
                console.log(response.data.data)
                setboardingData(response.data.data)
            }).catch(err=>console.log(err))
    }, []);

    const arr = boardingData.map((data, index) => {
        return(
            <label>{data.boardimID}</label>
        )
    })

    return (

        <div style={{ height: 510, width: '100%' }}>

            <DataGrid
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
                rows={rows}
                sx={{
                    border: '1px solid #FFFFFF',
                }}
            />
            {arr}
        </div>
    );
}

export default ViewBoarding;
