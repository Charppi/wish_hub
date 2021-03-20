import React, { useState } from 'react'
import { CustomersForm } from '../components/customers/CustomersForm'
import { CustomersList } from '../components/customers/CustomersList'
import { Modal } from '../components/Modal'
import Page from '../components/Page'
import { Customers as CustomersI } from '../models/customers'

export const Customers: React.FC = () => {
    const [customer, setCustomer] = useState<CustomersI | null>(null)
    const [showModal, setShowModal] = useState(false)

    return (
        <Page name="customers" create={() => { setCustomer(null); setShowModal(true) }}>
            <Modal showModal={showModal} onClose={() => setShowModal(false)}>
                <CustomersForm customerForUpdate={customer} />
            </Modal>
            <CustomersList onClickUpdate={(customer) => { setCustomer(customer); setShowModal(true) }} />
        </Page>
    )
}
