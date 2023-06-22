import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./tax.css";

export default function TaxBreakup() {
  function createData(n, ctc, percentagetaxed, taxamount) {
    return { n, ctc, percentagetaxed, taxamount };
  }

  const rows = [
    createData("1", "0 - 50,000", "0%", "0"),
    createData("2", "50,001 - 1,00,000", "5%", "2,500 - 5,000"),
    createData("3", "1,00,001 - 1,50,000", "10%", "5,000 - 10,000"),
    createData("4", "1,50,001 - 2,00,000", "15%", "7,500 - 15,000"),
    createData("5", "2, 00,001 - 10,00,000", "20%", "1,60,000 - 2,00,000"),
    createData("6", "10,00,001+ ", "42%", "4,20,000 - 10,00,000"),
  ];

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          background: "inherit",
          alignItems: "center",
          m: 8,
        }}
      >
        <Typography
          component={"h3"}
          variant={"p"}
          sx={{ m: 2, textDecoration: "underline" }}
        >
          {" "}
          Tax Breakup{" "}
        </Typography>
        <TableContainer component={Paper} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell align="right">CTC (in ₹)</TableCell>
                <TableCell align="right">Percentage Taxed</TableCell>
                <TableCell align="right">Taxed Amount (in ₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ctc}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.n}
                  </TableCell>
                  <TableCell align="right">{row.ctc}</TableCell>
                  <TableCell align="right">{row.percentagetaxed}</TableCell>
                  <TableCell align="right">{row.taxamount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
