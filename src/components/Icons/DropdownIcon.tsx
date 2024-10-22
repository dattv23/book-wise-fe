import { Icon } from '@/types'

export const DropdownIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  backgroundColor = 'none',
  color = '#ffff',
  className
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={backgroundColor}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='DropDown'>
        <path
          id='Vector'
          d='M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z'
          fill={color}
        />
      </g>
    </svg>
  )
}
