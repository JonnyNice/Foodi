import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../CSS/creatorCard.css";
import LinkButton from './LinkButton'

function CreatorCard({ user, handleCreatorNameChange, ...otherProps}) {
  return (
    <div className="willywonka">
    <Card className="anotherone" sx={{ maxWidth: 400, bgcolor: "#DAD7CD" }}>
      <CardMedia
        component="img"
        sx={{ height: 150 }}
        src={user.image}
        title={user.username}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.username}
        </Typography>
        <Typography variant="body2">
          {user.bio}
        </Typography>
      </CardContent>
      <CardActions>
      <div {...otherProps}>
        <LinkButton username={user.username} onClick={handleCreatorNameChange}/>
      </div>
      </CardActions>
    </Card>
    </div>
  )
}

export default CreatorCard