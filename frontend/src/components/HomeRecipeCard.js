import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red, grey, green } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import "./recipeCard.css"

function HomeRecipeCard({recipe}) {

    return (
        <div className="home_recipe_container" sx={{ maxWidth: 345 }}>
            <Card sx= {{ bgcolor: '#DAD7CD'}}>
                <CardHeader
                    avatar={
                <Avatar sx={{ bgcolor: '#A3B18A' }} aria-label="recipe">
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
        <Link to={`/recipepage?id=${recipe.id}`}>
              <button>View Recipe</button>
            </Link>
        </CardActions>
    </Card>
        </div>
    );
    }

export default HomeRecipeCard;