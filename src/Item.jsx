
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function Item(item) {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item.image_link} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item

