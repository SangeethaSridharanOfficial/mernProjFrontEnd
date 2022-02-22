import Container from 'react-bootstrap/Container';
import Categories from './Categories/Categories';
function Catalogue() {
    return (
        <Container fluid className="p-3">
            <h1 className="header text-center">Choose Category</h1>
            <Categories />
        </Container>
    )
}

export default Catalogue;