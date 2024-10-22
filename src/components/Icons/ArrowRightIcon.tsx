import { Icon } from '@/types'

export const ArrowRightIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icons arrow-right'>
        <path
          id='Vector'
          d='M3.5 12H20M20 12L13 5M20 12L13 19'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
