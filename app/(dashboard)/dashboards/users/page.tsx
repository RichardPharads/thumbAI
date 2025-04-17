import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>This is users dashboard</h1>
      <ul>
        <li><Link href={'/dashboards/users/1'}> This is user 1</Link></li>
        <li><Link href={'/dashboards/users/2'}> This is user 2</Link></li>
        <li><Link href={'/dashboards/users/3'}> This is user 3</Link></li>
        <li><Link href={'/dashboards/users/4'}> This is user 4</Link></li>
      </ul>
    </div>
  )
}

export default page