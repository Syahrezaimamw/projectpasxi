import React from 'react'
import { useParams } from 'react-router-dom'

const perLaporan = () => {
    const {id} = useParams()
  return (
    <div>
      saya {id}
    </div>
  )
}

export default perLaporan
