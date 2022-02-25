import { memo } from "react";

const FilterComponent = ({ onChange }) => {
  console.log('re-render filter');
  return (
    <div className="w-full mb-5">
      <input 
        className="w-[300px] py-2 px-4 outline-none border rounded" 
        type="text" 
        name="search" 
        id="search"
        onChange={e => onChange(e.target.value)}
        placeholder="Enter category name ..." 
      />
    </div>
  )
}

export default memo(FilterComponent)