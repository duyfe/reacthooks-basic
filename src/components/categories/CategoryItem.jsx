export const CategoryItem = ({ category, index, onUpdate, onRemove }) => {
  
  return (
    <tr key={category.id} data-id={category.id}>
      <td>{index + 1}</td>
      <td>{category.name}</td>
      <td>
        <button onClick={() => onUpdate(category.id)}>Edit</button> | &nbsp;
        <button onClick={() => onRemove(category.id)}>Delete</button>
      </td>
    </tr>
  )
}