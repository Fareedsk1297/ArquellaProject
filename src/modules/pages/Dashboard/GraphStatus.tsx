import React from "react";
//mui imports
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import arrowD from "../../../static/assets/images/arrow_drop_down.svg";

interface GraphStatusProps {}

function CustomTabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

//table
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("HUB1", 159, 6, 24, 4),
    createData("HUB2", 237, 9, 37, 4),
    createData("HUB3", 262, 16, 24, 6),
    createData("HUB4", 305, 3, 67, 4),
];

function GraphStatus(props: GraphStatusProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <div className="graphContainer">
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label="Average response time "
                                {...a11yProps(0)}
                            />
                            <Tab label="Falls" {...a11yProps(1)} />
                            <Tab label="Calls by zone " {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        Item One
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 630 }}
                                size="small"
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                        HUB Name
                                        </TableCell>
                                        <TableCell align="right">
                                        NO of calls
                                        </TableCell>
                                        <TableCell align="right">
                                        ART in Min
                                        </TableCell>
                                        <TableCell align="right">
                                        False alaram
                                        </TableCell>
                                        <TableCell align="right">
                                        Falls
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    { border: 0 },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.fat}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.carbs}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.protein}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CustomTabPanel>
                </Box>
            </div>
            <div className="dateSelection">
                <div className="dateText">
                    <span
                        style={{
                            color: "#888C8C",
                            fontSize: "12px",
                            fontWeight: "500",
                        }}
                    >
                        May 16-22, 2023
                    </span>
                    <span style={{ color: "" }}>Last 7 day</span>
                </div>
                <div className="dateImg">
                    <img src={arrowD} alt="" />
                </div>
            </div>
        </div>
    );
}

export default GraphStatus;
