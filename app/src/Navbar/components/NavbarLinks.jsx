import React, { PropTypes } from 'react'
import NavbarLink from '../containers/NavbarLink'

const NavbarLinks = ({ navbarLinks, onNavbarClick }) => (
  <div className='navbar'>
    <ul>
      {navbarLinks.map(navbarLink =>
        <NavbarLink
          key={navbarLink.id}
          {...navbarLink}
          onclick={() => onNavbarClick(navbarLink.id)}
        />
      )}
    </ul>
  </div>
)

NavbarLinks.propTypes = {
  navbarLinks: PropTypes.arrayOf(PropTypes.shape({
    id:     PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    text:   PropTypes.string.isRequired,
    url:    PropTypes.string.isRequired
  }).isRequired).isRequired,
  onNavbarClick: PropTypes.func.isRequired
}

export default NavbarLinks
