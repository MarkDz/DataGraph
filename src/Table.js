import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500
  }
});

/**
 * This component makes use of the "marerial-ud" table function
 * render a nice responsive table
 *
 *
 * @param props object
 *
 */
const CustomizedTables = props => {
  let keys = Object.keys(props.data[0]);

  const classes = useStyles();

  return (
    <div>
      <Tooltip title="This Data Table is updated when new data is passed in">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {keys.map(row => (
                  <StyledTableCell align="center">{row}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map(row => (
                <StyledTableRow key={row.a}>
                  <StyledTableCell align="center">{row.a}</StyledTableCell>
                  <StyledTableCell align="center">{row.b}</StyledTableCell>
                  <StyledTableCell align="center">{row.c}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Tooltip>
    </div>
  );
};

export default CustomizedTables;