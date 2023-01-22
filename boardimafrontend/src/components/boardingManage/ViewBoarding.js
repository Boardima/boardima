import * as React from 'react';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import ViewPopup from '../homeUniFilter/ViewPopup';
import EditPopup from './EditPopup';
import DeletePopup from './DeletePopup';
import Axios from "axios";
import MapPopup from '../homeUniFilter/MapPopup';
import { Typography } from '@mui/material';
import DescriptionData from './DescriptionData';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import BusRouteData from './BusRouteData';

function ViewBoarding(props) {

    const columns = [
        {
            field: "ownerName",
            headerName: "Owner Name",
            headerClassName: "header-class-name",
            width: 300,
        },
        // {
        //     field: "address",
        //     headerName: "Address",
        //     headerClassName: "header-class-name",
        //     width: 222,
        // },
        {
            field: "gender",
            headerName: "Gender",
            headerClassName: "header-class-name",
            width: 150,
        },
        {
            field: "contactNumber",
            headerName: "Contact No",
            headerClassName: "header-class-name",
            width: 180,
        },
        {
            field: "description",
            headerName: "Description",
            headerClassName: "header-class-name",
            headerAlign: "center",
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            width: 140,
            style:{wordBreak:"break-all", wordWrap: "break-word", width:300},
            renderCell: (params) => {
                return (
                    <DescriptionData des={params.row.description}></DescriptionData>
                );
            },
        },
        {
            field: "busUOC",
            headerName: "UOC",
            headerClassName: "header-class-name",
            headerAlign: "center",
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            width: 80,
            renderCell: (params) => {
                return (
                    <BusRouteData route={"Bus Route to UOC"} value={params.row.busUOC}></BusRouteData>
                );
            },
        },
        {
            field: "busUOM",
            headerName: "UOM",
            headerClassName: "header-class-name",
            headerAlign: "center",
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            width: 80,
            renderCell: (params) => {
                return (
                    <BusRouteData route={"Bus Route to UOM"} value={params.row.busUOM}></BusRouteData>
                );
            },
        },
        {
            field: "busUSJ",
            headerName: "USJ",
            headerClassName: "header-class-name",
            headerAlign: "center",
            align: "center",
            disableColumnMenu: true,
            sortable: false,
            width: 80,
            renderCell: (params) => {
                return (
                    <BusRouteData route={"Bus Route to USJ"} value={params.row.busUSJ}></BusRouteData>
                );
            },
        },
        {
            field: "status",
            headerName: "Status",
            headerClassName: "header-class-name",
            headerAlign: "center",
            align: "center",
            width: 90,
            renderCell: (params) => {
                if(params.row.status == "Available"){
                    return (
                        <CheckIcon sx={{color: "#2ECC71"}}></CheckIcon>
                    );
                }else{
                    return (
                        <ClearIcon sx={{color: "#CB4335"}}></ClearIcon>
                    );
                }
            },
        },
        {
            field: "col10",
            headerName: "Image",
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
                    <ViewPopup images={params.row.image} />
                );
            },
        },
        {
            field: "col11",
            headerName: "Map",
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
                    <MapPopup lat={params.row.latitude} lng={params.row.longitude} />
                );
            },
        },
        {
            field: "col12",
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
                    <EditPopup tableData={tableData} boardimID={params.row.id} />
                );
            },
        },
        {
            field: "col14",
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
    const [tableData, setTableData] = React.useState([]);
    let tableRows = [];

    React.useEffect(() => {
        Axios.get("http://localhost:5000/api/boardim")
            .then((response) => {
                response.data.data.map((row) => {
                    tableRows.push({
                        id: row.boardimID,
                        ownerName: row.ownerName,
                        address: row.address,
                        latitude: row.latitude,
                        longitude: row.longitude,
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
                rows={tableData}
                sx={{
                    border: '1px solid #FFFFFF',
                }}
            />
        </div>
    );
}

export default ViewBoarding;
