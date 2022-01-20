import React from 'react'
import { Link } from 'react-router-dom'

import data from './../data.json'

export default function Models() {
  const modelList = data.modelList
  return (
    <div>
      <ul>
        {modelList.map((item, i) => (
          <li>
            <Link to={`/${item.id}`}>item {i}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
