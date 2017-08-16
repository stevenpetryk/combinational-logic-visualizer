import { connect } from 'react-redux'
import get from 'lodash/get'

export default ({ isHighlighted = () => true, items = () => [] }) => Component => {
  function mapStateToProps (state, ownProps) {
    const highlightedItems = get(state, 'highlighting.items', [])

    return {
      isHighlighted: isHighlighted(highlightedItems, ownProps)
    }
  }

  function mapDispatchToProps (dispatch, ownProps) {
    return {
      highlightOn () {
        setTimeout(() => dispatch({ type: 'SET_HIGHLIGHTED_ITEMS', payload: items(ownProps) }))
      },

      highlightOff () {
        dispatch({ type: 'REMOVE_HIGHLIGHTED_ITEMS', payload: items(ownProps) })
      }
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
