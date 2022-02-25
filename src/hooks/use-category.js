import { useEffect, useState } from "react"
import categoryService from "../services/categoryService";

export function useCategory({ page, searchKey, limitItem}) {
  const [categories, setCategories] = useState([])
  const [totalCount, setTotalCount] = useState(1)

   const getCategories = async () => {
     console.log('get categories');
     const { data, total } = await categoryService.getAll({ _page: page, _q: searchKey, _limit: limitItem })

    setCategories(data)
    setTotalCount(total)
  }

  const removeCategory = (id) => {
    console.log('remove');
    if(!id) return
    categoryService.remove(id).then(() => getCategories())
  }

  useEffect(() => {
    getCategories()
  }, [page, searchKey, limitItem])

  return {
    categories,
    totalCount,
    removeCategory
  }
}