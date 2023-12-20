import React from 'react'
import Link from 'next/link'

const classeslist = () => {
  return (
    <div className="showclasses">
    <Link href="/F4">
      <span>Class F4</span>
    </Link>
    <span>Class F3</span>
    <span>Class F2</span>
  </div>
  )
}

export default classeslist