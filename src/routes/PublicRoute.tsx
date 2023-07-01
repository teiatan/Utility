import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedInUser } from '../redux/auth/selectors';


const PublicRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedInUser);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
