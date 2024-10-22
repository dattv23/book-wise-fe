import { Icon } from '@/types'

export const ServicesIcon: React.FC<Icon> = ({ width = 40, height = 40, color = '#DB4444', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 ${width} ${height}'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='icons-service'>
        <rect width='40' height='40' rx='20' fill={color} />
        <path
          opacity='0.3'
          d='M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z'
          fill='#2F2E30'
        />
        <circle cx='40.5' cy='40' r='29' fill='black' />
      </g>
    </svg>
  )
}
