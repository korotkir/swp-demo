import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Новости</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;