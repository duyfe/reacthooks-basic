import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Sidebar } from './components/Sidebar';
import { Dashboard } from './views/Dashboard'
import { Categories } from './views/Categories'

function App() {
  return (
    <Router>
      <div className='flex w-full'>
        <Sidebar />
        <div className='pt-[60px] flex-1'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
