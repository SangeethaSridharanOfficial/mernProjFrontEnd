import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import data from '../../../seed-data/categories.json';


function Categories() {
    const navigate = useNavigate();
    const [categories,] = useState(data.categories);

    function navigateToCategory(id) {
        navigate(`category/${id}`);
    }

    return (
        <Row>
            {categories.map(c => (<Col sm key={c.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={c.imageUrl} />
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Text>{c.description}</Card.Text>
                        <Button variant="dark" size="sm" onClick={navigateToCategory.bind(null, c.id)}>Browse</Button>
                    </Card.Body>
                </Card>
            </Col>)
            )}
        </Row>
    )
}

export default Categories;