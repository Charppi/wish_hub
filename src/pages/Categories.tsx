import React from 'react'
import { ModalCreateCategories } from '../components/categories/ModalCreateCategories';
import { Modal } from '../components/Modal';
import Page from '../components/Page'
import { presentLoading } from '../services/utils.service';

interface State {
    isOpenModal: boolean
}
interface Props { }

export default class Categories extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
    }
    render() {
        return <Page name="Categorías" create={() => this.setState({ isOpenModal: true })}>
            <Modal name="Crear categoría" showModal={this.state.isOpenModal} onClose={() => this.setState({ isOpenModal: false })}>
                <ModalCreateCategories />
            </Modal>
        </Page>
    }
}
