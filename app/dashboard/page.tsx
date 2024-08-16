"use client"
import React, { useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
function Dashboard() {
    const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
        {/* search section */}
          <SerchSection onSerchInput={(value: string) => setserchinput(value)} />

        {/* teplate list section */}
          <TemplateList serchinput={userSearchInput} />
    </div>
  )
}

export default Dashboard
