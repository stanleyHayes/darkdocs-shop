import React from "react";
import {
    Grid,
    Toolbar, Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {Menu} from "@material-ui/icons";

const MobileNavigationHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                color: theme.palette.text.secondary
            },
            toolbar: {
                backgroundColor: theme.palette.primary.main
            },
            button: {
                color: theme.palette.text.primary
            },
            menuButton: {
                color: theme.palette.text.primary
            },
            logo: {
                fontWeight: 'bold',
                color: theme.palette.text.primary
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} xs={2}>
                    <Link className={classes.link} to="/">
                        <Typography
                            className={classes.logo}
                            variant="h5">
                            DS
                        </Typography>
                    </Link>
                </Grid>
                <Grid container={true} alignItems="center" justifyContent="flex-start" item={true} xs={8}>
                    <Grid item={true}>
                        <Typography
                            className={classes.button}
                            size="small"
                            variant="h6">Darkdocs</Typography>
                    </Grid>
                </Grid>
                <Grid item={true} xs={2}>
                    <Menu/>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileNavigationHeader;
