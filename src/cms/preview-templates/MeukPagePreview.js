import React from 'react'
import PropTypes from 'prop-types'
import { MeukPageTemplate } from '../../templates/meuk-page'

const MeukPagePreview = ({ entry, widgetFor }) => (
  <MeukPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MeukPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MeukPagePreview
