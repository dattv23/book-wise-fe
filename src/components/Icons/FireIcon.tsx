import { Icon } from '@/types'

export const FireIcon: React.FC<Icon> = ({ width = 20, height = 22, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group'>
        <path
          id='Vector'
          d='M10 21C5.03 21 1 18.418 1 14V13.912C1 11.794 2.338 10.1 4.375 9C6.324 7.948 7.476 6.01 7.188 4L6.625 1L8.711 1.795C12.468 3.225 15.597 5.707 17.625 8.861C18.5167 10.2311 18.9941 11.8293 19 13.464V14C19 15.562 18.496 16.895 17.625 17.965'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M10 21C8.343 21 7 19.567 7 17.8C7 16.4 8.016 15.279 8.91 14.252L10 13L11.09 14.252C11.984 15.28 13 16.4 13 17.8C13 19.567 11.657 21 10 21Z'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
