import dynamic from 'next/dynamic'

const EmployeeManagementPage = dynamic(() => import('@/containers/admin/employee-management-page'))

const EmployeeManagement: React.FC = () => {
  return <EmployeeManagementPage />
}

export default EmployeeManagement
