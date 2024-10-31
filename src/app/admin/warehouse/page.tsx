import dynamic from 'next/dynamic'

const WarehouseManagementPage = dynamic(() => import('@/containers/admin/warehouse-management-page'))

const WarehouseManagement = () => {
  return <WarehouseManagementPage />
}

export default WarehouseManagement
