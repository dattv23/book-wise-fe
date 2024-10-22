import { Icon } from '@/types'

export const ArrowDownLeftIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icons:arrow-down-left'>
        <path
          id='Vector'
          d='M6 18L18 6M6 8V18H16'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
