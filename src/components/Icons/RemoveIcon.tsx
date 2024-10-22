import { Icon } from '@/types'

export const RemoveIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = 'white',
  backgroundColor = '#DB4444',
  className
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='12' cy='12' r='9' fill={backgroundColor} />
      <path
        d='M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
