
import { useMemo } from "react"

export const Table = ({categories, onUpdate, onRemove}) => {

  const categoryElements = useMemo(() => {
    return categories.map((category, index) => (
      <tr key={category.id} data-id={category.id}>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>
          <button onClick={() => onUpdate(category.id)}>Edit</button> | &nbsp;
          <button onClick={() => onRemove(category.id)}>Delete</button>
        </td>
      </tr>
      ))
  }, [categories])
  
  return (
    <table width="100%" className="table">
      <thead>
        <tr className="text-left">
          <th className="w-[100px]">Stt</th>
          <th>Name</th>
          <th className="w-[150px]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categoryElements}
      </tbody>
    </table>
  )
}