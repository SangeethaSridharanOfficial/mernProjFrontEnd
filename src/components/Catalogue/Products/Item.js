import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Item.css';
function ItemDetail(props) {

    return (
        <Col md={4} className="p-2">
            <Card border="light"  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} className="product-item-card_img"/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>Looking to get back in shape? Discover top quality aerobic training machines</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemDetail;