import { Icon } from '@/types'

export const DeleteIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  backgroundColor = 'white',
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
      <g id='icon-delete'>
        <path
          id='Vector'
          d='M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143'
          stroke={color}
          strokeWidth='1.56'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
