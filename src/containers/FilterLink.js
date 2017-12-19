import Link from '../components/Link';
import { connect } from 'react-redux';
import { setFilter } from '../actions/productActions';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.currentFilter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;