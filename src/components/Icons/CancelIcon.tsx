import { Icon } from '@/types'

export const CancelIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icon-cancel' clipPath='url(#clip0_158_3778)'>
        <path
          id='Vector'
          d='M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <circle id='Ellipse 26' cx='12' cy='12' r='11.25' stroke='black' strokeWidth='1.5' />
      </g>
      <defs>
        <clipPath id='clip0_158_3778'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
