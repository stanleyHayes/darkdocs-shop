import React, {useState} from "react";
import {
    Button,
    Grid,
    Menu,
    MenuItem,
    Toolbar
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {AccountBalance, CreditCard, Dashboard, KeyboardArrowDown, MenuBook, MonetizationOn} from "@material-ui/icons";

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
                color: theme.palette.text.primary
            },
            menuButton: {
                color: theme.palette.text.primary
            }
        }
    });

    const classes = useStyles();

    const [bankAnchor, setBankAnchor] = useState(null);
    const [creditAnchor, setCreditAnchor] = useState(null);

    const handleBankAnchorClick = event => {
        setBankAnchor(event.currentTarget);
    }

    const handleBankAnchorClose = () => {
        setBankAnchor(null);
    }

    const handleCreditAnchorClick = event => {
        setCreditAnchor(event.currentTarget);
    }

    const handleCreditAnchorClose = () => {
        setCreditAnchor(null);
    }

    return (
        <Toolbar className={classes.toolbar} variant="regular">
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
                    <Button
                        className={classes.button}
                        startIcon={<MonetizationOn/>}
                        size="small"
                        variant="text">Add Funds</Button>
                </Grid>
                <Grid item={true}>
                    <Link className={classes.link} to="/orders">
                        <Button
                            className={classes.button}
                            startIcon={<MenuBook/>}
                            size="small"
                            variant="text">Orders</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Button
                        className={classes.button}
                        startIcon={<AccountBalance/>}
                        endIcon={<KeyboardArrowDown/>}
                        onClick={handleBankAnchorClick}
                        size="small"
                        variant="text">
                        Bank Logins & ShopWithtrip
                    </Button>
                    <Menu
                        variant="menu"
                        elevation={1}
                        anchorEl={bankAnchor}
                        onClose={handleBankAnchorClose}
                        open={Boolean(bankAnchor)}>
                        <MenuItem>
                            <Button className={classes.menuButton} variant="text" size="small">USA Bank Logins</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button className={classes.menuButton} variant="text" size="small">UK Bank Logins</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button className={classes.menuButton} variant="text" size="small">Canada Bank Logins</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item={true}>
                    <Button
                        className={classes.buton}
                        endIcon={<KeyboardArrowDown/>}
                        startIcon={<CreditCard/>}
                        onClick={handleCreditAnchorClick}
                        size="small"
                        variant="text">Credit Card</Button>
                    <Menu
                        elevation={1}
                        anchorEl={creditAnchor}
                        onClose={handleCreditAnchorClose}
                        open={Boolean(creditAnchor)}>
                        <MenuItem>
                            <Button className={classes.menuButton} variant="text" size="small">Credit Card Logs</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button className={classes.menuButton} variant="text" size="small">CC Dump + Pin</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopNavigationHeader;
