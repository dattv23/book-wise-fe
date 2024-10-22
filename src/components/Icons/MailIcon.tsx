import { Icon } from '@/types'

export const MailIcon: React.FC<Icon> = ({ width = 40, height = 40, color = '#DB4444', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 ${width} ${height}'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='icons-mail'>
        <rect width='40' height='40' rx='20' fill={color} />
        <path
          id='Vector'
          d='M10 13L20 20L30 13M10 27H30V13H10V27Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
