import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    // we use double {{}} for inline styling in react
    <div>
        <h1 style={{color: '#fff', padding:'20px 0', background: '#333'}}>Welcome to React App with Rails API by {props.title}</h1>

        <h3 style={headingStyles}>Fetching Data through API of Bugzilla</h3>
        
    </div>
  )
}

Header.defaultProps = {
    title: "Workplace Name",
}

Header.propTypes = {
    title: PropTypes.string.isRequired // to have title as string and must have specified data type
}

const headingStyles = {
    color: '#fff',
    margin:'20px 0', 
    padding:'20px 0', 
    background: '#222'   
}

export default Header