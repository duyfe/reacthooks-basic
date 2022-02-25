import { useMemo } from "react"
import classNames from 'classnames'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationComponent = ({totalCount, currentPage, itemPerPage, onPageChange}) => {
  console.log('render pagination');
  const totalCountElement = useMemo(() => {
    const totalPage = Math.ceil(Number(totalCount) / itemPerPage)
    
    return <Pagination count={totalPage} onChange={(_, page) => onPageChange(page)} color="primary" />

  }, [totalCount, currentPage])

  return (
    <div className="flex justify-end my-4">
      <Stack spacing={5}>
      {totalCountElement}
    </Stack>
    </div>
  )
}