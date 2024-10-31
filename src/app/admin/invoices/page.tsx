import dynamic from 'next/dynamic'

const InvoiceManagementPage = dynamic(() => import('@/containers/admin/invoice-management-page'))

const InvoiceManagement: React.FC = () => {
  return <InvoiceManagementPage />
}

export default InvoiceManagement
