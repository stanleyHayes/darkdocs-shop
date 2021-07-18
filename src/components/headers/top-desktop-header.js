import React, {useState} from "react";
import {Avatar, Button, Grid, Menu, MenuItem, TextField, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {KeyboardArrowDown} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const TopDesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                color: theme.palette.text.primary
            },
            button: {
                color: theme.palette.text.primary
            },
            searchButton: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.primary.main,
                paddingLeft: 16,
                paddingRight: 16
            },
            toolbar: {
                backgroundColor: theme.palette.primary.dark
            },
            name: {
                color: theme.palette.text.primary
            },
            avatar: {},
            logo: {
                width: 50,
                height: 50
            },
            brand: {
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 32
            },
            image: {
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            },
            searchInput: {

            }
        }
    });
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const handleProfileClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }
    const handleSearchQuery = event => {
        setQuery(event.target.value);
    }
    const handleSearch = event => {

    }

    const {user} = useSelector(state => state.auth);

    const getInitials = name => {
        const names = name.split(' ');
        if (names.length === 1)
            return names[0][0];
        if (names.length === 2)
            return `${names[0][0]}${names[1][0]}`
    }

    return (
        <Toolbar className={classes.toolbar} variant="dense">
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid container={true} item={true} lg={3} justifyContent="flex-start">
                    <Link to="/" className={classes.link}>
                        <Button
                            startIcon={
                                <Avatar className={classes.logo} variant="rounded">
                                    <img className={classes.image} alt="logo" src="/images/logo.png"/>
                                </Avatar>
                            }
                            display="inline"
                            className={classes.brand}
                            variant="text"
                            align="center">
                            Darkdocs Shop
                        </Button>
                    </Link>
                </Grid>
                <Grid
                    item={true}
                    lg={6}
                    spacing={2}
                    container={true}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item={true} lg={5}>
                        <TextField
                            type="text"
                            onChange={handleSearchQuery}
                            value={query}
                            fullWidth={true}
                            className={classes.searchInput}
                            variant="outlined"
                            margin="dense"
                            placeholder="Search"
                        />
                    </Grid>
                    <Grid item={true} lg={1}>
                        <Button
                            fullWidth={true}
                            className={classes.searchButton}
                            onClick={handleSearch}
                            variant="outline">
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true} lg={3} container={true} justifyContent="flex-end">
                    <Button
                        fullWidth={false}
                        className={classes.name}
                        onClick={handleProfileClick}
                        endIcon={<KeyboardArrowDown/>}
                        startIcon={<Avatar className={classes.avatar}>{user && getInitials(user.name)}</Avatar>}
                        variant="outlined">
                        {user && user.name}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        variant="menu"
                        elevation={1}
                        open={menuOpen}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            <Link className={classes.link} to="/profile">
                                <Button variant="text" size="small" className={classes.button}>
                                    Profile
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className={classes.link} to="/edit-profile">
                                <Button variant="text" size="small" className={classes.button}>
                                    Edit Profile
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link
                                className={classes.link}
                                to="/auth/login">
                                <Button variant="text" size="small" className={classes.button}>
                                    Logout
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TopDesktopHeader;
