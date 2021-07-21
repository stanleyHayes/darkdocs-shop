import React from "react";
import {Button, Grid, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {CreditCard, Dashboard, MonetizationOn, Receipt, ShoppingBasket} from "@material-ui/icons";

const DesktopNavigationHeader = () => {

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
                color: theme.palette.text.primary,
                fontWeight: 'bold'
            },
            menuButton: {
                color: theme.palette.text.primary
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar} variant="dense">
            <Grid container={true} justifyContent="center" alignItems="center" spacing={6}>
                <Grid item={true}>
                    <Link className={classes.link} to="/">
                        <Button
                            className={classes.button}
                            startIcon={<Dashboard/>}
                            size="small"
                            variant="text">Dashboard</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Link className={classes.link} to="/funds">
                        <Button
                            className={classes.button}
                            startIcon={<MonetizationOn/>}
                            size="small"
                            variant="text">Funds</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Link className={classes.link} to="/products">
                        <Button
                            className={classes.button}
                            startIcon={<CreditCard/>}
                            size="small"
                            variant="text">Bank Logs & CC Dumps</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Link className={classes.link} to="/orders">
                        <Button
                            className={classes.button}
                            startIcon={<ShoppingBasket/>}
                            size="small"
                            variant="text">Orders</Button>
                    </Link>
                </Grid>

                <Grid item={true}>
                    <Link className={classes.link} to="/cheques">
                        <Button
                            className={classes.button}
                            startIcon={<Receipt/>}
                            size="small"
                            variant="text">Cheques</Button>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopNavigationHeader;
