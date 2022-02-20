import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <ul className='w-[200px] pt-[60px]'>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  )
}