import { connect } from 'react-redux'

export default ({ isHighlighted = () => true, items = () => [] }) => Component => {
  function mapStateToProps (state, ownProps) {
    const items = state.highlighting && state.highlighting.items || []

    return {
      isHighlighted: isHighlighted(items, ownProps)
    }
  }

  function mapDispatchToProps (dispatch, ownProps) {
    return {
      highlightOn () {
        dispatch({ type: 'SET_HIGHLIGHTED_ITEMS', payload: items(ownProps) })
      },

      highlightOff () {
        dispatch({ type: 'REMOVE_HIGHLIGHTED_ITEMS', payload: items(ownProps) })
      }
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
