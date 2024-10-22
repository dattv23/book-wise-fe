type ContainerProps = {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { children } = props
  return <div className='px-4 lg:px-36'>{children}</div>
}

export default Container
