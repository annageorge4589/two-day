import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// const rows=[{"name":"Aruna","adm":"CH0234","Dept":"Chem","Sem":"s4"},
//             {"name":"Anna","adm":"CH0234","Dept":"Chem","Sem":"s4"},
//             {"name":"Anu","adm":"CH0234","Dept":"Chem","Sem":"s4"}
//];
const View =() => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    }
  )
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Email</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((rows) => (
          <TableRow
            key={rows.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {rows.firstName}
            </TableCell>
            <TableCell align="right">{rows.lastName}</TableCell>
            <TableCell align="right">{rows.gender}</TableCell>
            <TableCell align="right">{rows.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View