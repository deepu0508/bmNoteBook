import React, { useContext, useEffect } from 'react'
import Notes from './Notes'
import MenuSidebar from './MenuSidebar'
import noteContext from '../Context/Notes/noteContext'


export default function Home() {
  const context = useContext(noteContext)
  const { collapse } = context
  return (
    <>
      <div className="container d-flex bmAddNote" onClick={collapse}>
        <div className="part1 part" key={"menu"}>
          <MenuSidebar />
        </div>
        <div className="part2 part" key={"notes"}>
          <Notes />
        </div>
      </div>
    </>
  )
}
