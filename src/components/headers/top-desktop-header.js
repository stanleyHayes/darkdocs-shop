import React, {useState} from "react";
import {Avatar, Button, Grid, Menu, MenuItem, TextField, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {KeyboardArrowDown} from "@material-ui/icons";
import {Link} from "react-router-dom";

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
            toolbar: {
                backgroundColor: theme.palette.primary.dark
            },
            logo: {
                color: theme.palette.text.primary,
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            name: {
                color: theme.palette.text.primary
            },
            avatar: {}
        }
    });
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const handleProfileClick = event => {
        console.log('hovered')
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
    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} lg={2}>
                    <Link to="/" className={classes.link}>
                        <Typography
                            className={classes.logo}
                            variant="h5"
                            align="center">
                            Darkdocs Shop
                        </Typography>
                    </Link>
                </Grid>
                <Grid
                    item={true}
                    lg={7}
                    container={true}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item={true} lg={6}>
                        <TextField
                            type="text"
                            onChange={handleSearchQuery}
                            value={query}
                            fullWidth={true}
                            variant="outlined"
                            margin="none"
                            placeholder="Search"
                        />
                    </Grid>
                    <Grid item={true} lg={1}>
                        <Button
                            fullWidth={true}
                            className={classes.button}
                            onClick={handleSearch}
                            variant="outline">
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true} lg={3}>
                    <Button
                        fullWidth={false}
                        className={classes.name}
                        onClick={handleProfileClick}
                        endIcon={<KeyboardArrowDown/>}
                        startIcon={<Avatar className={classes.avatar}>SH</Avatar>}
                        variant="text">
                        Stanley Hayford
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
