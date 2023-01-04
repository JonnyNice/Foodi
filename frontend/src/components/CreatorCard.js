import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./creatorCard.css";
import LinkButton from './/LinkButton'


function CreatorCard({ creator, creatorName, handleCreatorNameChange, ...otherProps}) {
  return (
    <div className="willywonka">
    <Card className="anotherone" sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        sx={{ height: 150 }}
        src={creator.image}
        title={creator.username}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {creator.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {creator.email}
        </Typography>
      </CardContent>
      <CardActions>
      <div {...otherProps}>
        <LinkButton creatorName={creatorName} onClick={handleCreatorNameChange}/>
      </div>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
  )
}

export default CreatorCard