import NextLink from 'next/link'
import PropTypes from 'prop-types'

function Link({ href, children, disabled, ...props }) {
  if (disabled) {
    return children
  }

  return (
    <NextLink href={href} passHref prefetch={false} {...props}>
      {children}
    </NextLink>
  )
}

Link.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.element,
}

export default Link
