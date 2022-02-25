import React from "react";
import { useState, useCallback, useMemo} from "react";
import { useCategory } from "../hooks";

import { TableComponent, FilterComponent} from '../components/categories'

export const Categories = () => {

  let timeout = null;
  const [page, setPage] = useState(0)
  const [searchKey, setSearchKey] = useState('')
  const [limitItem, setLimitItem] = useState(5)
  console.log('render categories');
  const { categories, totalCount, removeCategory } = useCategory({page: page + 1, searchKey, limitItem})

  const handleRemove = async (id) => removeCategory(id)

  const handleEdit = (id) => {
    console.log(id);
  }
    
  const handleUpdate = (id) => {
    console.log(id);
  }
    
  const handlePageChange = useCallback((p) => setPage(p),[page])

  const handleChangeRowsPerPage = useCallback(value => setLimitItem(+value), [limitItem])
    
  const handeSearchChange = useCallback((value) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => setSearchKey(value), 500)
  }, [searchKey])

  const tableElement = useMemo(
    () => 
      categories.length === 0 
      ? <p>No Result</p> 
      : <TableComponent 
          categories={categories} 
          totalCount={+totalCount} 
          currentPage={+page} 
          limitItem={+limitItem}
          onRemove={handleRemove} 
          onUpdate={handleUpdate}
          onPageChange={(_, page) => handlePageChange(page)}
          handleChangeRowsPerPage={(event) => handleChangeRowsPerPage(event.target.value)}
        />
    ,[categories, totalCount, page, limitItem, searchKey]
  )

  return (
    <>
      <FilterComponent onChange={handeSearchChange} />
      {tableElement}
    </>
  )
}