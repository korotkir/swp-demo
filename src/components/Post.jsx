import Card from 'react-bootstrap/Card';
import './Post.css'

export default function Post(props) {
  const date = new Date(props.data.date).toLocaleDateString()
  const time = new Date(props.data.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

  return (
      <Card className='post-card'>
        <Card.Img className='post-image' src={props.data.field3} />
        <Card.Body>
          <Card.Text>
            <h3>{props.data.field1}</h3>
            {props.data.field2}
            <div className='post-date'>{date} {time}</div>
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

