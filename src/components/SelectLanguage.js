import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

const SelectLanguage = (props) => {
  const links = props.langs.map((lang) => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: 'white',
      }}
    >
      <li selected={lang.selected} style={{ display: 'inline', marginRight: '1rem' }}>
        {lang.langKey}
      </li>
    </Link>
  ))

  return (
    <section>
      <header
        style={{
          color: 'white',
          display: 'inline',
        }}
      >
        <FormattedMessage id="selectLanguage" />
        {':'}
      </header>
      <ul style={{ display: 'inline' }}>{links}</ul>
    </section>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
}

export default SelectLanguage
