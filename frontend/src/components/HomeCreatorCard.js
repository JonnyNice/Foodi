import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinkButton from './LinkButton';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./creatorCard.css"

function HomeCreatorCard({creator, creatorName, handleCreatorNameChange, ...otherProps}) {
    return (
        <div className="homeccard">
    <Card className="homecc" sx={{ maxWidth: 345 }}>
        <CardHeader
                avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="creator">
                C
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
        }
            title={creator.name}
        subheader="September 14, 2016"
        />
    <CardMedia
        sx={{ height: 150 }}
        image={creator.image}
        title={creator.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {creator.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {creator.bio}
        </Typography>
      </CardContent>
      <CardActions>
      <div {...otherProps}>
        <LinkButton creatorName={creator.name} onClick={handleCreatorNameChange}/>
      </div>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
  )
}

export default HomeCreatorCard;