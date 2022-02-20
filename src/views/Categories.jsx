import {useState, useEffect} from "react";
import categoryService from "../services/categoryService";

import { CategoryItem } from "../components/categories/CategoryItem";

export const Categories = () => {
  
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function getAllCategories() {
      const categoryList = await categoryService.getAll()
      setCategories(categoryList)
    }

    getAllCategories()
  }, [])

  const handleRemove = (id) => {
    async function removeCategory(id) {
      const categoryList = await categoryService.remove(id)
      console.log(categoryList);
    }

    removeCategory(id)
    setCategories(categories.filter(item => item.id !== id))
  }

  const handleEdit = (id) => {
    console.log(id);
  }

  return (
    <div>
      <table width="100%" className="table">
        <thead>
          <tr className="text-left">
            <th className="w-[100px]">Stt</th>
            <th>Name</th>
            <th className="w-[150px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map((cat, index) => {
              return <CategoryItem 
                key={cat.id} 
                category={cat} 
                index={index} 
                onUpdate={() => handleEdit(cat.id)} 
                onRemove={() => handleRemove(cat.id)} 
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}