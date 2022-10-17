import React from 'react';
import Stack from "@mui/material/Stack";
import TableNumberButtons from "./TableNumberButtons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KuboNumButtonComponent from "./KuboNumButtonComponent";


export default function AssignTableNumberComponent(props) {
  return (
    <React.Fragment>
      {props.tableNumber == '' ? (
        <Typography class="itemNameTag">Assign Table Number</Typography>
        ) : (
        <Typography class="itemNameTag">Table No: {props.tableNumber}</Typography>
      )}
      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={450}
        marginLeft={3}
        height={283}
      >
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="1" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="2" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="3" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="4" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="5" handleTableClick={props.handleTableClick} />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="6" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="7" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="8" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="9" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="10" handleTableClick={props.handleTableClick} />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="11" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="12" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="13" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="14" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="15" handleTableClick={props.handleTableClick} />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="16" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="17" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="18" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="19" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="20" handleTableClick={props.handleTableClick} />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="21" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="22" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="23" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="24" handleTableClick={props.handleTableClick} />
          <TableNumberButtons tableNum="25" handleTableClick={props.handleTableClick} />
        </Stack>
        <KuboNumButtonComponent handleTableClick={props.handleTableClick}/>
      </Box>
    </React.Fragment>
  );
}
