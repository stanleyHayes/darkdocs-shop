import React, {useState} from "react";
import {Avatar, Grid, TextField, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Search} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const TopTabletHeader = () => {

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
                width: 40,
                height: 40
            },
            name: {
                color: theme.palette.text.primary
            },
            image: {
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            },
        }
    });
    const classes = useStyles();
    const [query, setQuery] = useState("");
    const {user} = useSelector(state => state.auth);

    const handleSearchQuery = event => {
        setQuery(event.target.value);
    }
    const handleSearch = event => {

    }

    const getInitials = name => {
        const names = name.split(' ');
        if (names.length === 1)
            return names[0][0];
        if (names.length === 2)
            return `${names[0][0]}${names[1][0]}`
    }

    return (
        <Toolbar className={classes.toolbar} variant="dense">
            <Grid container={true} justifyContent="center" alignItems="center">
                <Grid item={true} md={1}>
                    <Link to="/" className={classes.link}>
                        <Avatar className={classes.logo} variant="rounded">
                            <img className={classes.image} alt="logo" src="/images/logo.png"/>
                        </Avatar>
                    </Link>
                </Grid>
                <Grid
                    spacing={2}
                    item={true}
                    md={10}
                    container={true}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item={true} md={9}>
                        <TextField
                            type="text"
                            onChange={handleSearchQuery}
                            value={query}
                            fullWidth={true}
                            variant="outlined"
                            margin="dense"
                            placeholder="Search"
                        />
                    </Grid>
                    <Grid item={true} md={1}>
                        <Avatar
                            onClick={handleSearch}
                            variant="circular">
                            <Search/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid item={true} md={1}>
                    <Link className={classes.link} to="/profile">
                        <Avatar
                            className={classes.name}
                            variant="circular">
                            {user && getInitials(user.name)}
                        </Avatar>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TopTabletHeader;
