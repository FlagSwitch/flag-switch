import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FlagSwitch } from "components/common/switches/FlagSwitch/FlagSwitch";

function createData(
  name: string,
  project: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, project, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "project-1", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", "project-1", 237, 9.0, 37, 4.3),
  createData("Eclair", "project-1", 262, 16.0, 24, 6.0),
  createData("Cupcake", "project-1", 305, 3.7, 67, 4.3),
  createData("Gingerbread", "project-1", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <FlagSwitch checked={checked} handleChange={handleChange} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Project Id</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">development</TableCell>
              <TableCell align="right">production</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.project}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
