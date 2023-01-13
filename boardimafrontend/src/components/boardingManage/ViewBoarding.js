import * as React from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import ViewPopup from '../homeUniFilter/ViewPopup';
import EditPopup from './EditPopup';
import DeletePopup from './DeletePopup';
import Axios from "axios";

const VISIBLE_FIELDS = ['Owner Name'];

function ViewBoarding(props) {

    // const { data } = useDemoData({
    //     // dataSet: '',
    //     // visibleFields: VISIBLE_FIELDS,
    //     rowLength: 100,
    // });

    // const rows = [
    //     {
    //         id: 1,
    //         col1: 'MUI',
    //         col2: 28000,
    //         col3: 28000,
    //         col4: 28000,
    //         col5: 28000,
    //         col6: 28000,
    //         col7: 28000,
    //         col8: 28000,
    //         col9: 28000,
    //     },
    //     {
    //         id: 2,
    //         id: 1,
    //         col1: 'MUI',
    //         col2: 28000,
    //         col3: 28000,
    //         col4: 28000,
    //         col5: 28000,
    //         col6: 28000,
    //         col7: 28000,
    //         col8: 28000,
    //         col9: 28000,
    //     },
    // ];

    const columns = [
        {
            field: "ownerName",
            headerName: "Owner Name",
            headerClassName: "header-class-name",
            width: 205,
        },
        {
            field: "address",
            headerName: "Address",
            headerClassName: "header-class-name",
            width: 222,
        },
        {
            field: "gender",
            headerName: "Gender",
            headerClassName: "header-class-name",
            width: 90,
        },
        {
            field: "contactNumber",
            headerName: "Contac tNumber",
            headerClassName: "header-class-name",
            width: 140,
        },
        {
            field: "description",
            headerName: "Description",
            headerClassName: "header-class-name",
            width: 290,
        },
        {
            field: "busUOC",
            headerName: "Bus Route to UOC",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "busUOM",
            headerName: "Bus Route to UOM",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "busUSJ",
            headerName: "Bus Route to USJ",
            headerClassName: "header-class-name",
            width: 300,
        },
        {
            field: "status",
            headerName: "Status",
            headerClassName: "header-class-name",
            width: 90,
        },
        {
            field: "col10",
            headerName: "View",
            headerClassName: "header-class-name",
            headerAlign: "center",
            width: 97,
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => {
                console.log(params.row)
                const onClick = (e) => { }
                return (
                    <ViewPopup images={params.row.image} />
                );
            },
        },
        {
            field: "col11",
            headerName: "Edit",
            headerClassName: "header-class-name",
            headerAlign: "center",
            width: 97,
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
            width: 97,
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
    const [tableData, setTableData] = React.useState([]);
    let tableRows = [];

    React.useEffect(() => {
        Axios.get("http://localhost:5000/api/boardim")
            .then((response) => {
                response.data.data.map((row) => {
                    tableRows.push({
                        id: row.boardimID,
                        ownerName: row.ownerName,
                        gender: row.gender,
                        contactNumber: row.contactNumber,
                        description: row.description,
                        status: row.status,
                        busUOC: row.busUOC,
                        busUOM: row.busUOM,
                        busUSJ: row.busUSJ,
                        image: row.image
                    });
                });
                setTableData(tableRows);
            });
    }, []);

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
                columnVisibilityModel={{
                    // Hide columns status and traderName, the other columns will remain visible
                    busUOC: false,
                    busUOM: false,
                    busUSJ: false,
                  }}
                rows={tableData}
                sx={{
                    border: '1px solid #FFFFFF',
                }}
            />
        </div>
    );
}

export default ViewBoarding;
