import { Icon } from '@/types'

export const ArrowLeftIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icons:arrow-left'>
        <path
          id='Vector'
          d='M11 5L4 12L11 19M4 12H20'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
