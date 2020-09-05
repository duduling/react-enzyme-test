import { PropTypes } from 'prop-types'

export const TodosTypes = PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
})