import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary footer">
      <Container fluid className="justify-content-end pt-5">
          <Navbar.Text >
            Developed solely by: <a href="https://www.linkedin.com/in/carlo-i-corcuera/" target="_blank">Sir Carlo Corcuera</a>
          </Navbar.Text>
      </Container>
    </Navbar>
  );
}