"use client"
import React, { useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
function Dashboard() {
    const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
        {/* search section */}
        <SearchSection  handleSearchChange={(event:string)=>setUserSearchInput(event.target.value)}/>
        {/* teplate list section */}
        <TemplateListSection searchInputResult={userSearchInput}/>
    </div>
  )
}

export default Dashboard