import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import classNames from './Card.module.css';


export default function MediaCard() {
  return (
    <Card className={classNames.dimension}>
      <CardActionArea>
        <CardMedia
          className={classNames.media}
          image={require('../Images/Cards/m.jpg')}
          title="Une Pomme"/>
        <CardContent>
          <p>
            Test
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et molestiae placeat perferendis non accusantium nulla, a sapiente veniam culpa perspiciatis pariatur quasi rem minus! Aliquid similique voluptas nemo adipisci enim.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    
    
  );
}