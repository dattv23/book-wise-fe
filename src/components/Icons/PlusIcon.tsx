import { Icon } from '@/types'

export const PlusIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icon-plus'>
        <path
          id='Vector'
          d='M12 20V12M12 12V4M12 12H20M12 12H4'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </g>
    </svg>
  )
}
