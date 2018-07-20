import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppState from '../../../../AppState'
import { fetchCategories, FetchCategoriesAction } from '../../actions/categories'
import CategoryList from '../../components/category-list'
import { CategoryItem } from '../../interfaces/CategoriesState'
import * as categorieSelectors from '../../selectors/CategorieSelectors'

interface Props {
  loading: boolean,
  error: string,
  items: CategoryItem[],
  // actions
  fetchCategories: () => FetchCategoriesAction,
}

class CategoryListContainer extends Component<Props> {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const {loading, error, items} = this.props
    return (
      <CategoryList
        error={error}
        items={items}
        loading={loading}
      />
    )
  }

}

const mapStateToProps = ({home: {categories}}: AppState) => ({
  error: categorieSelectors.getError(categories),
  loading: categorieSelectors.getLoading(categories),
  items: categorieSelectors.getCategories(categories),
})

const mapDispatchToProps = {
  fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer)
