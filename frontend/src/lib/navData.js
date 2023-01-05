import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArticleIcon from '@mui/icons-material/Article';
import HowToRegIcon from '@mui/icons-material/HowToReg';


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
    link: "/recipes"
    },
    {
    id: 2,
    icon: <AccountCircleIcon/>,
    text: "Users",
    link: "/users"
    },
    {
     id: 3,
     icon: <InfoIcon/>,
     text: "About",
     link: "/about"
    },
// {
//     id: 4,
//     icon: <FacebookIcon color="inherit" />,
//     text: "Facebook",
//     link: "http://www.facebook.com",
//   },
    // {
    //  id: 5,
    //  icon: <YouTubeIcon/>,
    //  text: "Youtube",
    //  link: "youtube.com",
    // },
    // {
    //  id: 6,
    //  icon: <InstagramIcon/>,
    //  text: "Instagram",
    //  link: "instagram.com"
    // },
    {
     id: 5,
     icon: <ArticleIcon/>,
     text: "Recipe Page",
     link: "/recipepage"
    },

    {
        id: 6,
        icon: <HowToRegIcon/>,
        text: "Free Register!",
        link: "/create"
       },

    {
             id: 7,
             icon: <InfoIcon/>,
             text: "login",
             link: "/login"
            },
        
]
