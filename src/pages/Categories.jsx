import React from "react";
import { useState, useCallback, useMemo} from "react";
import { useCategory } from "../hooks";

import { Table, Filter} from '../components/categories'
import { Pagination } from "../components/common";

export const Categories = () => {
  
  let timeout = null;
  const [page, setPage] = useState(1)
  const [searchKey, setSearchKey] = useState('')
  
  const { categories, totalCount, removeCategory } = useCategory({ page, searchKey })
  
  const handleRemove = async (id) => removeCategory(id)

  const handleEdit = (id) => {
    console.log(id);
  }
    
  const handleUpdate = (id) => {
    console.log(id);
  }
    
  const handlePageChange = useCallback((p) => setPage(p),[page])
    
  const handeSearchChange = useCallback((value) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => setSearchKey(value), 500)
  }, [searchKey])

  const tableElement = useMemo(
    () => 
      categories.length === 0 
      ? <p>No Result</p> 
      : <Table categories={categories} onRemove={handleRemove} onUpdate={handleUpdate} />
    ,[categories]
  )

  return (
    <>
      <Filter onChange={handeSearchChange} />
      {tableElement}
      <Pagination totalCount={totalCount} currentPage={page} itemPerPage={10} onPageChange={handlePageChange} />
    </>
  )
}