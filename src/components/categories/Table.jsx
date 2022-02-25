
import { useMemo, memo } from "react"
import { styled } from '@mui/material/styles'
import { 
  Table, 
  TableFooter, 
  TableBody, 
  TableRow, 
  TableCell, 
  tableCellClasses, 
  TableContainer, 
  TableHead, 
  Paper, 
  TablePagination} from '@mui/material';

const TableComponent = ({categories, totalCount, currentPage, limitItem, onUpdate, onRemove, onPageChange, handleChangeRowsPerPage}) => {
  console.log('render table', totalCount);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const categoryElements = useMemo(() => {
  
    return categories.map((category, index) => (
      <StyledTableRow key={index}>
        <StyledTableCell component="th" scope="row">
          {index+1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {category.name}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <button onClick={() => onRemove(category.id)}>Delete</button>
        </StyledTableCell>
      </StyledTableRow>
    ))
  }, [categories])

  const paginationElement = useMemo(() => {
    return <TablePagination
            rowsPerPageOptions={[5, 10, 20, 50]}
            colSpan={3}
            count={totalCount}
            rowsPerPage={limitItem}
            page={currentPage}
            SelectProps={{
              inputProps: {
                'aria-label': 'Items per page',
              },
              native: true,
            }}
            onPageChange={onPageChange}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // ActionsComponent={TablePaginationActions}
          />
  },[totalCount, currentPage, categories, limitItem])
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={100}>STT</StyledTableCell>
            <StyledTableCell align="left">name</StyledTableCell>
            <StyledTableCell width={150} align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryElements}
        </TableBody>
        <TableFooter>
          <TableRow>
            {paginationElement}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default memo(TableComponent)