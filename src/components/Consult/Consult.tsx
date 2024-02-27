import { useEffect, useState } from 'react'
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

interface Consult {
    _id: string
    patientId: string
    doctorId: string
    SC: boolean
    RX: boolean
    LR: boolean
    MC: boolean
    status: string
}

const Consult: React.FC = () => {
  const [data, setData] = useState<Consult[]>([])

  const getConsultRequest = () => {
    axios.get(`http://localhost:3000/api/consult`)
    .then(res => {
      const consultData = res.data
      setData(consultData)
    })

  }

  useEffect(() => {
    getConsultRequest();
  }, []);

  console.log(data)

  const getBoolIcon = (bool: boolean) => 
    bool ? <CheckCircleOutlineRoundedIcon /> : <ClearRoundedIcon />
  

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Doctor ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>SC</TableCell>
            <TableCell>RX</TableCell>
            <TableCell>LR</TableCell>
            <TableCell>MC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{item.patientId}</TableCell>
                <TableCell>{item.doctorId}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{getBoolIcon(item.SC)}</TableCell>
                <TableCell>{getBoolIcon(item.RX)}</TableCell>
                <TableCell>{getBoolIcon(item.LR)}</TableCell>
                <TableCell>{getBoolIcon(item.MC)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Consult;
