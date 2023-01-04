import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./recipeCard.css"

function HomeRecipeCard({recipe}) {

    return (
        <div className="home_recipe_container" sx={{ maxWidth: 345 }}>
            <Card>
                <CardHeader
                    avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
            }
        action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
        }
            title={recipe.name}
            subheader={`Created By: ${recipe.user.username}`}
        />
            <CardMedia
            component="img"
            height="194"
            image={recipe.image}
            alt={recipe.name}
            />
        <CardContent>
            </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="learn-more">
            Recipe Page<ArrowForwardIcon />
        </IconButton>
        </CardActions>
    </Card>
        </div>
    );
    }

export default HomeRecipeCard;