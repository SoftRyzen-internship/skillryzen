import { NavLink } from 'react-router-dom';
import { testRoutes } from 'routes/testRoutes';

const LoginPage = () => {
  const testRoutesLink = testRoutes.map((item) => (
    <li key={item.id}>
      <NavLink {...item}>{item.name}</NavLink>
    </li>
  ));
  return (
    <>
      <span style={{ textAlign: 'center' }}></span> Test Link Router
      <ul
        style={{
          textAlign: 'center',
          fontSize: '20px',
          textTransform: 'uppercase',
          margin: '20px',
        }}
      >
        {testRoutesLink}
      </ul>
    </>
  );
};

export default LoginPage;
