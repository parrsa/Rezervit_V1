import * as React from 'react';
import {
    Box,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Grid, Drawer, List, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../../../../Assets/theme/base/colors';
import logo from '../../../../Assets/images/logo.svg'
import {Listnav} from '../../../../Type'
import {MenuList} from '@mui/material';
import {navList, ProfileList} from "./navList";
import {useTheme} from '@emotion/react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import MTButton from '../../../../CustomMui/Mbutton';
import LoginImages from '../../../../Assets/images/Login.png'
import LocationImages from '../../../../Assets/images/Location.png'
import MIconButton from '../../../../CustomMui/MiconButton';
import Cookies from 'js-cookie';
import Tooltip from '@mui/material/Tooltip';
import url from '../../../../Api/Url';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import {styled} from "@mui/material/styles";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MInput from "../../../../CustomMui/Minput";
import SearchImages from "../../../../Assets/images/Search.png";
const urlSplit = (path: string): string => {
    const splitUrl = path.split("/");
    const newText = splitUrl[1];
    return newText;
};


const drawerWidth = 200;


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function Navbars() {

    const Cook = Cookies.get('Tokenlogin')
    const [userInfo, setUserinfo] = React.useState()
    const navigate = useNavigate()
    const {pathname} = useLocation();

    const theme = useTheme();


    React.useEffect(() => {
        const UserInfoDetails = async () => {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Token ${Cook}`,
                }
            };
            const response = await fetch(`${url}/user/user_info`, config)
            const data = await response.json();
            setUserinfo(data.user)
        }
        UserInfoDetails()
    }, [])
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };

    const LogoutUser = () => {
        Cookies.remove('Tokenlogin');
        navigate('/')
    }

    const [setOpens, setOpenss] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenss(true);
    };

    const handleDrawerClose = () => {
        setOpenss(false);
    };

    const [open, setopen] = useState(false)
    const [anchorEls, setAnchorEls] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEls);
    const handleClicks = (event: React.MouseEvent<HTMLElement>) => {
        setopen(!open);
    };

    const handleClose = () => {
        setAnchorEls(null);
    };
    return (
        <AppBar sx={{
            backgroundColor: '#1E1E1E', margin: 0, padding: 0, boxShadow: 0,
            // opacity: { lg: "90%", md: '90%', xs: '100%' }
            position: 'static'
        }}>
            <Toolbar>
                <Grid item container lg={12} md={12} justifyContent={"space-evenly"}>
                    <Grid item container lg={3} md={3} sx={{display: {xs: 'none', md: 'flex'}, opacity: "100%"}}>
                        <Grid item container lg={7} justifyContent={"start"}>
                            <Link to='/'>
                                <img src={logo} alt='logo' height={'55px'} about='logo for website'
                                     style={{marginRight: '10px', marginTop: '7px'}}/>
                            </Link>
                        </Grid>
                    </Grid>

                    {/*Responsive*/}
                    <Grid item container justifyContent={'space-between'} sx={{display:{lg:'none' , md:'none'}}} alignItems={'center'}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerOpen}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            sx={{
                                backgroundColor: '#1E1E1E',
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    backgroundColor: '#1E1E1E',
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="persistent"
                            anchor="left"
                            open={setOpens}
                        >
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {/*<ChevronLeftIcon />*/}
                                    {/*{((theme as any).direction === 'ltr') ? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
                                    <ChevronLeftIcon/>
                                </IconButton>
                            </DrawerHeader>
                            <List>
                                {
                                    navList.map((item: Listnav, index) => {
                                        return (
                                            <>
                                                <MenuList key={index} onClick={() => navigate(item.path)}>
                                                    <MenuItem sx={{
                                                        cursor: "pointer",
                                                        fontFamily: 'Yekan Bakh Medium',
                                                        color: ` ${urlSplit(pathname) === urlSplit(item.path) && `${colors.kaarnas.yellow}`}`
                                                    }}>{item.title}</MenuItem>
                                                </MenuList>
                                            </>
                                        )
                                    })
                                }

                                {/*<Button*/}
                                {/*    id="fade-button"*/}
                                {/*    aria-controls={open ? 'fade-menu' : undefined}*/}
                                {/*    aria-haspopup="true"*/}
                                {/*    aria-expanded={open ? 'true' : undefined}*/}
                                {/*    onClick={handleClicks}*/}
                                {/*>*/}
                                {/*    Dashboard*/}
                                {/*</Button>*/}

                                <MenuItem onClick={handleClicks} sx={{cursor: "pointer", fontFamily: 'Yekan Bakh Medium', color:open?'kaarnas.yellow':''}}>
                                    تنظیمات
                                    <IconButton onClick={handleDrawerClose}>
                                        {/*<ChevronLeftIcon />*/}
                                        {open ? <KeyboardArrowDownIcon sx={{color:'kaarnas.yellow'}} /> : <ChevronLeftIcon sx={{color:'kaarnas.yellow'}} /> }
                                        {/*<ChevronLeftIcon/>*/}
                                    </IconButton>
                                    </MenuItem>

                                {ProfileList.map((item, index) => (
                                    <>
                                        <MenuItem sx={{
                                            display: open ? 'block' : 'none',
                                            p: 2,
                                            fontFamily: 'Yekan Bakh Medium',
                                            color: ` ${urlSplit(pathname) === urlSplit(item.path) && `${colors.kaarnas.yellow}`}`

                                        }} key={index} onClick={() => navigate(item.path)}>
                                            {item.title}
                                        </MenuItem>
                                    </>
                                ))}
                                <Grid item container lg={12} justifyContent={'center'}>
                                    {Cook &&
                                        <MIconButton location>
                                            <img src={LocationImages} alt='icons'/>
                                        </MIconButton>
                                    }

                                    {!Cook &&
                                        <MTButton login onClick={() => navigate('/signup')}><img src={LoginImages} alt='icon' style={{marginLeft: '10px'}}/><span style={{marginRight: '0px', fontFamily: 'Yekan Bakh Medium'}}>ورود / ثبت نام</span></MTButton>
                                    }
                                </Grid>


                            </List>
                        </Drawer>
                    </Grid>
                    {/*EndResponsive*/}

                    <Grid item container lg={5} md={5} justifyContent={"center"}>
                        <Grid item lg={12} md={12} justifyContent={"space-evenly"} alignItems={"center"}
                              sx={{textDecoration: "none", display: {xs: 'none', md: 'flex'},}}>
                            {
                                navList.map((item: Listnav, index) => {
                                    return (
                                        <>
                                            <MenuList key={index} onClick={() => navigate(item.path)}>
                                                <MenuItem sx={{
                                                    cursor: "pointer",
                                                    fontFamily: 'Yekan Bakh Medium',
                                                    color: ` ${urlSplit(pathname) === urlSplit(item.path) && `${colors.kaarnas.yellow}`}`
                                                }}>{item.title}</MenuItem>
                                            </MenuList>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                    <Grid sx={{display: {xs: 'none', md: 'flex', lg: 'flex'}}} item container lg={2} md={3}
                          justifyContent={'end'} alignItems={'center'}>
                        <Box sx={{
                            flexGrow: 0,
                            color: 'black',
                            display: 'flex',
                            gap: 5,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            {Cook &&
                                <>

                                    <Tooltip sx={{display: {xs: 'none', md: 'flex', lg: 'flex'}}} title="Account">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ml: 2}}
                                            aria-controls={opens ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={opens ? 'true' : undefined}
                                        >

                                            <Avatar sx={{width: 32, height: 32}}>
                                                <ManageAccountsIcon/>
                                            </Avatar>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={opens}
                                        sx={{display: {xs: 'none', md: 'flex', lg: 'flex'}}}
                                        onClose={handleCloses}
                                        onClick={handleCloses}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                fontFamily: 'Yekan Bakh Medium',
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 140,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        dir='rtl'
                                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                    >

                                        {ProfileList.map((item, index) => (
                                            <React.Fragment>
                                                <MenuItem key={index}  sx={{color: ` ${urlSplit(pathname) === urlSplit(item.path) && `${colors.kaarnas.yellow}`}`,p: 2, fontFamily: 'Yekan Bakh Medium',}} onClick={() => navigate(item.path)}>
                                                    <ListItemIcon>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    {item.title}
                                                </MenuItem>
                                            </React.Fragment>
                                        ))}
                                        <MenuItem sx={{fontFamily: 'Yekan Bakh Medium'}} onClick={LogoutUser}>
                                            <ListItemIcon>
                                                <Logout sx={{color: 'black.main'}} fontSize="small"/>
                                            </ListItemIcon>
                                            خروج
                                        </MenuItem>
                                    </Menu>
                                </>
                            }
                            {Cook &&
                                <MIconButton sx={{display: {xs: 'none', md: 'flex', lg: 'flex'}}} location>
                                    <img src={LocationImages} alt='icons'/>
                                </MIconButton>
                            }

                            {!Cook &&
                                <MTButton sx={{display: {xs: 'none', md: 'flex', lg: 'flex'}}} login
                                          onClick={() => navigate('/signup')}><img src={LoginImages} alt='icon'
                                                                                   style={{marginLeft: '10px'}}/> <span
                                    style={{marginRight: '0px', fontFamily: 'Yekan Bakh Medium'}}>ورود / ثبت نام</span></MTButton>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default Navbars
