
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
function Items() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getItems = async () => {
        try {
            const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            setIsLoading(false)
            console.info(response.data.slice(0, 20))
            setItems(response.data.slice(0, 20))
        } catch (error) {
            console.error('데이터를 가져오는데 실패 ', error);
        }
    }  //  getItems

    useEffect(() => {
        getItems()
    }, [])

    return (
        <Container >
            <Row>
                {items.map((item, i) => {
                    return (
                        <Col key={i} md={4} className="mb-3">
                            <Item {...item} ></Item>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Items

