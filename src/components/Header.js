import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click!')
    }

    return (
        <header className='header'>
            <h1 style={{ color: 'red', backgroundColor: 'beige'}}>{title}</h1>
            <Button color='navy' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
  
export default Header
