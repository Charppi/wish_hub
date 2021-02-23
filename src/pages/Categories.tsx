import React from 'react'
import { CategoriesForm } from '../components/categories/CategoriesForm'
import { CategoriesList } from '../components/categories/CategoriesList'
import Page from '../components/Page'
import { Categories as CategoriesI } from "../models/categories"

interface State {
    category?: CategoriesI
}
interface Props { }

export default class Categories extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            category: { name: "" }
        }
    }
    render() {
        return <Page name="Categorías">
            <CategoriesForm forUpdate={this.state.category} onReset={() => this.setState({ category: { name: "" } })} />
            <CategoriesList onUpdate={(category) => { this.setState({ category }) }} />
        </Page>
    }
}
