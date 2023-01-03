import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const navData = [
    {
     id: 0,
     icon: <HomeIcon/>,
     text: "Home",
     link: "/"
    },
    {
    id: 1,
    icon: <MenuBookIcon/>,
    text: "Recipes",
    link: "recipes"
    },
    {
    id: 2,
    icon: <AccountCircleIcon/>,
    text: "Cooks",
    link: "cooks"
    },
    {
     id: 3,
     icon: <InfoIcon/>,
     text: "About",
     link: "about"
    },
]