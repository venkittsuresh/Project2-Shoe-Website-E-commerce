import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box, Button, Container, Grid, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, AccountCircle as AccountCircleIcon, Favorite as FavoriteIcon, ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/WolfPaw.png';
import './Navbar.css';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'MEN', path: '/men' },
  { name: 'WOMEN', path: '/women' },
  { name: 'KIDS', path: '/kids' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('/');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (path) => {
    setActivePage(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handlePageClick(page.path)} className="menu-item">
                  <Link
                    to={page.path}
                    className={`nav-link ${activePage === page.path ? 'active-link' : ''}`}
                    onClick={() => handlePageClick(page.path)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                className={`nav-button ${activePage === page.path ? 'active-nav-button' : ''}`}
                onClick={() => handlePageClick(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
            <Grid item>
              <img
                src={logo}
                alt="Logo"
                className="logo"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{ display: { xs: 'none', md: 'block' } }} 
                className="navbar-text"
              >
                WolfWalk
              </Typography>
            </Grid>
          </Grid>

          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton color="inherit" className="icon-button">
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit" className="icon-button">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit" className="icon-button">
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
