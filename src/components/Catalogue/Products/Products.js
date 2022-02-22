import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import data from '../../../seed-data/categories.json';
import { CardGroup, Row } from 'react-bootstrap';
import ItemDetail from './Item';

function Products() {
    const { id } = useParams();
    const category = data.categories.find((c) => c.id === +id);
    const [products] = useState(data.products[category.id])
    return (
        <Container fluid className="p-5">
            <h1 className="header text-center">Showing {category.name} Products</h1>
            <Row>
                <CardGroup>
                    {products.map(p => <ItemDetail {...p} key={p.id} />)}
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Products;