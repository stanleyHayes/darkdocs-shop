import React, {useState} from "react";
import {Avatar, Grid, TextField, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Search} from "@material-ui/icons";
import {Link} from "react-router-dom";

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
    const [query, setQuery] = useState("");

    const handleSearchQuery = event => {
        setQuery(event.target.value);
    }
    const handleSearch = event => {

    }
    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justifyContent="center" alignItems="center">
                <Grid item={true} md={1}>
                    <Link to="/" className={classes.link}>
                        <Typography
                            className={classes.logo}
                            variant="h5"
                            align="center">
                            DS
                        </Typography>
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
                            margin="none"
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
                            SH
                        </Avatar>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TopTabletHeader;
