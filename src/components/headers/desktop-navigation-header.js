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
import AddFundsDialog from "../modals/add-funds-dialog";
import USABankLoginsDialog from "../modals/usa-bank-logins-dialog";
import UKBankLoginsDialog from "../modals/uk-bank-logins-dialog";
import CCDumpPinsDialog from "../modals/cc-dump-pins-dialog";
import CanadaBankLoginsDialog from "../modals/canada-bank-logins-dialog";
import BankChequesDialog from "../modals/bank-cheques-dialog";
import CreditCardLogsDialog from "../modals/credit-card-logs-dialog";

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

    const [bankAnchor, setBankAnchor] = useState(null);
    const [creditAnchor, setCreditAnchor] = useState(null);
    const [fundsDialogOpen, setFundsDialogOpen] = useState(false);
    const [bankChequesDialogOpen, setBankChequesDialogOpen] = useState(false);
    const [canadaBankLoginsDialogOpen, setCanadaBankLoginsDialogOpen] = useState(false);
    const [ccDumpPinsDialogOpen, setCCDumpPinsDialogOpen] = useState(false);
    const [creditCardLogsDialogOpen, setCreditCardLogsDialogOpen] = useState(false);
    const [ukBankLoginsDialogOpen, setUKBankLoginsDialogOpen] = useState(false);
    const [usaBankLoginsDialogOpen, setUSABankLoginsDialogOpen] = useState(false);

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

    const handleAddFundsClick = () => {
        setFundsDialogOpen(true);
    }

    const handleFundsDialogClose = () => {
        setFundsDialogOpen(false);
    }

    const handleBankChequesClick = () => {
        setBankChequesDialogOpen(true);
    }

    const handleBankChequesDialogClose = () => {
        setBankChequesDialogOpen(false);
    }

    const handleCanadaBankLoginsClick = () => {
        setCanadaBankLoginsDialogOpen(true);
    }

    const handleCanadaBankLoginsDialogClose = () => {
        setCanadaBankLoginsDialogOpen(false);
    }

    const handleCCDumpPinsClick = () => {
        setCCDumpPinsDialogOpen(true);
    }

    const handleCCDumpPinsDialogClose = () => {
        setCCDumpPinsDialogOpen(false);
    }

    const handleCreditCardLogsClick = () => {
        setCreditCardLogsDialogOpen(true);
    }

    const handleCreditCardLogsDialogClose = () => {
        setCreditCardLogsDialogOpen(false);
    }

    const handleUKBankLoginsClick = () => {
        setUKBankLoginsDialogOpen(true);
    }

    const handleUKBankLoginsDialogClose = () => {
        setUKBankLoginsDialogOpen(false);
    }

    const handleUSABankLoginsClick = () => {
        setUSABankLoginsDialogOpen(true);
    }

    const handleUSABankLoginsDialogClose = () => {
        setUSABankLoginsDialogOpen(false);
    }
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
                    <Button
                        onClick={handleAddFundsClick}
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
                        keepMounted={true}
                        variant="menu"
                        elevation={1}
                        anchorEl={bankAnchor}
                        onClose={handleBankAnchorClose}
                        open={Boolean(bankAnchor)}>
                        <MenuItem onClick={handleUSABankLoginsClick}>
                            <Button className={classes.menuButton} variant="text" size="small">USA Bank Logins</Button>
                        </MenuItem>
                        <MenuItem onClick={handleUKBankLoginsClick}>
                            <Button className={classes.menuButton} variant="text" size="small">UK Bank Logins</Button>
                        </MenuItem>
                        <MenuItem onClick={handleCanadaBankLoginsClick}>
                            <Button
                                className={classes.menuButton}
                                variant="text" size="small">
                                Canada Bank Logins
                            </Button>
                        </MenuItem>
                        <MenuItem onClick={handleBankChequesClick}>
                            <Button
                                className={classes.menuButton}
                                variant="text" size="small">
                                Bank Cheques
                            </Button>
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item={true}>
                    <Button
                        className={classes.button}
                        endIcon={<KeyboardArrowDown/>}
                        startIcon={<CreditCard/>}
                        onClick={handleCreditAnchorClick}
                        size="small"
                        variant="text">Credit Card</Button>
                    <Menu
                        keepMounted={true}
                        elevation={1}
                        anchorEl={creditAnchor}
                        onClose={handleCreditAnchorClose}
                        open={Boolean(creditAnchor)}>
                        <MenuItem onClick={handleCreditCardLogsClick}>
                            <Button className={classes.menuButton} variant="text" size="small">Credit Card Logs</Button>
                        </MenuItem>
                        <MenuItem onClick={handleCCDumpPinsClick}>
                            <Button className={classes.menuButton} variant="text" size="small">CC Dump + Pin</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>

            <AddFundsDialog handleClose={handleFundsDialogClose} open={fundsDialogOpen}/>
            <BankChequesDialog handleClose={handleBankChequesDialogClose} open={bankChequesDialogOpen}/>
            <CanadaBankLoginsDialog handleClose={handleCanadaBankLoginsDialogClose} open={canadaBankLoginsDialogOpen}/>
            <CCDumpPinsDialog handleClose={handleCCDumpPinsDialogClose} open={ccDumpPinsDialogOpen}/>
            <CreditCardLogsDialog handleClose={handleCreditCardLogsDialogClose} open={creditCardLogsDialogOpen}/>
            <UKBankLoginsDialog handleClose={handleUKBankLoginsDialogClose} open={ukBankLoginsDialogOpen}/>
            <USABankLoginsDialog handleClose={handleUSABankLoginsDialogClose} open={usaBankLoginsDialogOpen}/>
        </Toolbar>
    )
}

export default DesktopNavigationHeader;
