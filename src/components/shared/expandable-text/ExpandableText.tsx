'use client'

import React, { useState } from 'react'

interface ExpandableTextProps {
  text: string
  maxLength?: number
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength = 255 }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (text.length <= maxLength) {
    return <div>{text}</div>
  }

  return (
    <div>
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button onClick={() => setIsExpanded(!isExpanded)} className='ml-2 text-blue-500 hover:underline'>
        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </div>
  )
}

export default ExpandableText