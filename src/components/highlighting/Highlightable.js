import { connect } from 'react-redux'

export default (type, { isHighlighted = () => true, items = () => [] }) => Component => {
  function mapStateToProps (state, ownProps) {
    return {
      isHighlighted: isHighlighted(state.highlighting.items, ownProps)
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
