import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./creatorCard.css"

function CreatorCard({creator}) {
  return (
    <div className="willywonka">
    <Card className="anotherone" sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 150 }}
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small">Recipes</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CreatorCard