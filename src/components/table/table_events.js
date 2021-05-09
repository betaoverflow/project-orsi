import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./table.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "royalblue",
    color: theme.palette.common.white,
    padding: "1%",
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function CustomizedTables() {
  return (
    <TableContainer className="table2" component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
            <StyledTableRow>
            <StyledTableCell>2021-04-18</StyledTableCell>
            <a href={require('../../assets/data/Brochure Webinar April 2021.pdf').default} target="_blank">
              <StyledTableCell >One-Day National Webinar On Optimization Problem And Its Application</StyledTableCell>
            </a>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell>2021-03-07</StyledTableCell>
            <a href={require('../../assets/data/Brochure ORSI Webinar March 2021.pdf').default} target="_blank">
              <StyledTableCell >One-Day National Webinar On Indexing And Referencing of Journals in Research</StyledTableCell>
            </a>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell>2020-09-26</StyledTableCell>
            <a href={require('../../assets/data/Brochure Webinar Sep 2020.pdf').default} target="_blank">
              <StyledTableCell >Two-Day Webinar On Application of Data Science and Soft Skill</StyledTableCell>
            </a>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
