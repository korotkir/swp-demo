import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Post from './components/Post'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.post(
      'https://vm-d69c771b.na4u.ru:3000/renderTable', 
      {collection: '/novosti'},
      {headers: {'Content-Type': 'application/json'}}
    )
      .then((res) => {
        console.log(res.data)
        setData(res.data.filter((el, i) => i > 0))
      })
      .catch((err) => {console.error(err)})

  }, [])


  return (
    <>
      <Navbar />
      <Container>
        <Row>
          {data.map((el, key) => (
            <Col key={key} xs={12} sm={6} md={6}>
              <Post data={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
