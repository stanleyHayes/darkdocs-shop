import React, {useState} from "react";
import {
    Avatar,
    Button, Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
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
                textDecoration: 'none'
            },
            button: {
                display: 'inline-block',
                marginLeft: 16,
                marginRight: 16,
                color: '#E5E7EB'
            }
        }
    });

    const classes = useStyles();

    const [bankAnchor, setBankAnchor] = useState(null);
    const [creditAnchor, setCreditAnchor] = useState(null);

    const handleBankAnchorClick = event => {
        setBankAnchor(event.currentTarget);
    }

    const handleBankAnchorClose = event => {
        setBankAnchor(null);
    }

    const handleCreditAnchorClick = event => {
        setCreditAnchor(event.currentTarget);
    }

    const handleCreditAnchorClose = event => {
        setCreditAnchor(null);
    }

    return (
        <Toolbar variant="dense">
            <Grid container={true} justifyContent="center" alignItems="center" spacing={4}>
                <Grid item={true}>
                    <Link className={classes.link} to="/">
                        <Button
                            sx={{
                                color: '#E5E7EB',
                                alignItems: "center"
                            }}
                            startIcon={<Dashboard/>}
                            size="large"
                            variant="text">Dashboard</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Button
                        sx={{
                            color: '#E5E7EB'
                        }}
                        startIcon={<MonetizationOn/>}
                        size="large"
                        variant="text">Add Funds</Button>
                </Grid>
                <Grid item={true}>
                    <Link className={classes.link} to="/">
                        <Button
                            sx={{
                                color: '#E5E7EB'
                            }}
                            startIcon={<MenuBook/>}
                            size="large"
                            variant="text">Orders</Button>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Button
                        sx={{
                            color: '#E5E7EB'
                        }}
                        startIcon={<AccountBalance/>}
                        endIcon={<KeyboardArrowDown/>}
                        onMouseEnter={handleBankAnchorClick}
                        size="large"
                        variant="text">
                        Bank Logins & ShopWithtrip
                    </Button>
                    <Menu
                        elevation={1}
                        anchorEl={bankAnchor}
                        onClose={handleBankAnchorClose}
                        open={Boolean(bankAnchor)}>
                        <MenuItem>
                            <Button variant="text" size="large">USA Bank Logins</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button variant="text" size="large">UK Bank Logins</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button variant="text" size="large">Canada Bank Logins</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item={true}>
                    <Button
                        sx={{
                            color: '#E5E7EB'
                        }}
                        endIcon={<KeyboardArrowDown/>}
                        startIcon={<CreditCard/>}
                        onMouseEnter={handleCreditAnchorClick}
                        size="large"
                        variant="text">Credit Card</Button>
                    <Menu
                        elevation={1}
                        anchorEl={creditAnchor}
                        onClose={handleCreditAnchorClose}
                        open={Boolean(creditAnchor)}>
                        <MenuItem>
                            <Button variant="text" size="large">Credit Card Logs</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button variant="text" size="large">CC Dump + Pin</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopNavigationHeader;
