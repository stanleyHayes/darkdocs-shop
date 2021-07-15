import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Avatar, Box,
    Button,
    Container,
    Divider,
    Grid, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {
    Close,
    Dashboard,
    AccountBalance,
    CreditCard,
    MenuBook,
    MonetizationOn, DeleteForever, ExitToApp, LockOpen, Edit, Lens, VerifiedUser, ExpandMore
} from "@material-ui/icons";
import AddFundsDialog from "../modals/add-funds-dialog";
import BankChequesDialog from "../modals/bank-cheques-dialog";
import CanadaBankLoginsDialog from "../modals/canada-bank-logins-dialog";
import CCDumpPinsDialog from "../modals/cc-dump-pins-dialog";
import CreditCardLogsDialog from "../modals/credit-card-logs-dialog";
import UKBankLoginsDialog from "../modals/uk-bank-logins-dialog";
import USABankLoginsDialog from "../modals/usa-bank-logins-dialog";

const DrawerContent = ({handleDrawerClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            link: {
                textDecoration: 'none'
            },
            button: {
                paddingTop: 8,
                paddingBottom: 8
            },
            container: {
                paddingTop: 16,
                paddingBottom: 16
            },
            accordion: {
                marginLeft: -16
            },
            closeIcon: {
                cursor: 'pointer'
            },
            deleteButton: {
                color: 'white',
                backgroundColor: '#DC2626',
                paddingTop: 8,
                paddingBottom: 8
            },
            logo: {
                width: 120,
                height: 120
            },
            box: {
                paddingBottom: 32
            },
            title: {
                fontWeight: 'bold',
                color: theme.palette.text.primary,
                textTransform: 'uppercase'
            },
            image: {
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            },
        }
    });

    const [fundsDialogOpen, setFundsDialogOpen] = useState(false);
    const [bankChequesDialogOpen, setBankChequesDialogOpen] = useState(false);
    const [canadaBankLoginsDialogOpen, setCanadaBankLoginsDialogOpen] = useState(false);
    const [ccDumpPinsDialogOpen, setCCDumpPinsDialogOpen] = useState(false);
    const [creditCardLogsDialogOpen, setCreditCardLogsDialogOpen] = useState(false);
    const [ukBankLoginsDialogOpen, setUKBankLoginsDialogOpen] = useState(false);
    const [usaBankLoginsDialogOpen, setUSABankLoginsDialogOpen] = useState(false);

    const handleAddFundsClick = () => {
        setFundsDialogOpen(true);
    }

    const handleFundsDialogClose = () => {
        setFundsDialogOpen(false);
        handleDrawerClose();
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

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Grid container={true} justifyContent="flex-end">
                    <Grid item={true}>
                        <Close className={classes.closeIcon} onClick={handleDrawerClose}/>
                    </Grid>
                </Grid>

                <Grid container={true} justifyContent="center">
                    <Grid item={true}>
                        <Avatar className={classes.logo} variant="rounded">
                            <img className={classes.image} alt="logo" src="/images/logo.png"/>
                        </Avatar>
                    </Grid>
                </Grid>

                <Box className={classes.box}>
                    <Typography className={classes.title} gutterBottom={true} variant="body2">Main</Typography>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/">
                        <Button
                            className={classes.button}
                            startIcon={<Dashboard/>}
                            fullWidth={false}
                            size="small">
                            Dashboard
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Button
                        onClick={handleAddFundsClick}
                        className={classes.button}
                        startIcon={<MonetizationOn/>}
                        fullWidth={false}
                        size="small">
                        Add Funds
                    </Button>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/orders">
                        <Button
                            startIcon={<MenuBook/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Orders
                        </Button>
                    </Link>

                    <Accordion variant="elevation" elevation={0} className={classes.accordion}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            <Button
                                startIcon={<AccountBalance/>}
                                size="small"
                                className={classes.button}
                                fullWidth={false}
                                variant="text">
                                BankLogins & ShopWithTrips
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <Button
                                    onClick={handleUSABankLoginsClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    USA Bank Logins
                                </Button>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Button
                                    onClick={handleUKBankLoginsClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    UK Bank Logins
                                </Button>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Button
                                    onClick={handleCanadaBankLoginsClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    Canada Bank Logins
                                </Button>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Button
                                    onClick={handleBankChequesClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    Bank Cheques
                                </Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={classes.accordion} variant="elevation" elevation={0}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            <Button
                                startIcon={<CreditCard/>}
                                size="small"
                                className={classes.button}
                                fullWidth={false}
                                variant="text">
                                Credit Card
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <Button
                                    onClick={handleCreditCardLogsClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    Credit Card Logs
                                </Button>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Button
                                    onClick={handleCCDumpPinsClick}
                                    startIcon={<Lens/>}
                                    className={classes.button}
                                    fullWidth={false}
                                    size="small">
                                    CC Dump + Pin
                                </Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                <Box>
                    <Typography className={classes.title} gutterBottom={true} variant="body2">Account</Typography>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/profile">
                        <Button
                            startIcon={<VerifiedUser/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Profile
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/edit-profile">
                        <Button
                            variant="text"
                            startIcon={<Edit/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Edit Profile
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link
                        className={classes.link}
                        to="/auth/change-password">
                        <Button
                            variant="text"
                            startIcon={<LockOpen/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Change Password
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link
                        className={classes.link}
                        to="/auth/login">
                        <Button
                            variant="text"
                            startIcon={<ExitToApp/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Logout
                        </Button>
                    </Link>
                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Button
                        variant="outlined"
                        startIcon={<DeleteForever/>}
                        className={classes.deleteButton}
                        fullWidth={true}
                        size="small">
                        Delete Account
                    </Button>
                </Box>
            </Container>
            <AddFundsDialog handleClose={handleFundsDialogClose} open={fundsDialogOpen}/>
            <BankChequesDialog handleClose={handleBankChequesDialogClose} open={bankChequesDialogOpen}/>
            <CanadaBankLoginsDialog handleClose={handleCanadaBankLoginsDialogClose} open={canadaBankLoginsDialogOpen}/>
            <CCDumpPinsDialog handleClose={handleCCDumpPinsDialogClose} open={ccDumpPinsDialogOpen}/>
            <CreditCardLogsDialog handleClose={handleCreditCardLogsDialogClose} open={creditCardLogsDialogOpen}/>
            <UKBankLoginsDialog handleClose={handleUKBankLoginsDialogClose} open={ukBankLoginsDialogOpen}/>
            <USABankLoginsDialog handleClose={handleUSABankLoginsDialogClose} open={usaBankLoginsDialogOpen}/>
        </React.Fragment>
    )
}

export default DrawerContent;
