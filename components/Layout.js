import Container from '@material-ui/core/Container';

import Header from './Header';

const Layout = props => (
  <>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <Container maxWidth="xl">
    <Header />
    {props.children}
  </Container>
  </>
);

export default Layout;
