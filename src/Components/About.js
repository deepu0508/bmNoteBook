import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function About() {
  const a = useContext(noteContext);

  // useEffect(() => {
  //   a.update();
  //   // eslint-disable-next-line
  // }, []);
  return (
    <>
      This is About {a.state.name} and i am in class {a.state.class}
      <button type="button" onClick={a.update}>change name</button>
    </>
  )
}
