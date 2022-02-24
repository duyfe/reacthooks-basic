import { useMemo } from "react"
import classNames from 'classnames'

export const Pagination = ({totalCount, currentPage, itemPerPage, onPageChange}) => {
  console.log('render pagination');
  const totalCountElement = useMemo(() => {
    const totalPage = Math.ceil(Number(totalCount) / itemPerPage)
    
    const setClass = (index) => classNames(
      'inline-block rounded-full w-[30px] h-[30px] mx-1 text-center opacity-50',
      {'font-bold border opacity-100': currentPage === index + 1 }
    )

    return Array.from(new Array(totalPage)).map((_, index) => 
    (
      <li className={setClass(index)} key={index}>
        <button onClick={() => onPageChange(index+1)}>{index + 1}</button>
      </li>
    ))
  }, [totalCount, currentPage])

  return (
    <div className="w-full my-5">
      <ul className="flex justify-end p-0 m-0">
        {totalCountElement}
      </ul>
    </div>
  )
}