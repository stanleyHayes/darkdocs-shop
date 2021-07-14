import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Container,
    Divider,
    Grid
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
import AddFundsDialog from "../shared/add-funds-dialog";

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
            }
        }
    });

    const [fundsDialogOpen, setFundsDialogOpen] = useState(false);

    const handleAddFundsClick = () => {
        setFundsDialogOpen(true);
    }

    const handleFundsDialogClose = () => {
        setFundsDialogOpen(false);
        handleDrawerClose();
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
                                startIcon={<Lens/>}
                                className={classes.button}
                                fullWidth={false}
                                size="small">
                                USA Bank Logins
                            </Button>

                            <Divider variant="fullWidth" className={classes.divider}/>

                            <Button
                                startIcon={<Lens/>}
                                className={classes.button}
                                fullWidth={false}
                                size="small">
                                UK Bank Logins
                            </Button>

                            <Divider variant="fullWidth" className={classes.divider}/>

                            <Button
                                startIcon={<Lens/>}
                                className={classes.button}
                                fullWidth={false}
                                size="small">
                                Canada Bank Logins
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
                                startIcon={<Lens/>}
                                className={classes.button}
                                fullWidth={false}
                                size="small">
                                Credit Card Logs
                            </Button>

                            <Divider variant="fullWidth" className={classes.divider}/>

                            <Button
                                startIcon={<Lens/>}
                                className={classes.button}
                                fullWidth={false}
                                size="small">
                                CC Dump + Pin
                            </Button>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Link className={classes.link} to="/edit-profile">
                    <Button
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
                    startIcon={<ExitToApp/>}
                    className={classes.button}
                    fullWidth={false}
                    size="small">
                    Logout
                </Button>
                </Link>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Button
                    startIcon={<DeleteForever/>}
                    className={classes.deleteButton}
                    fullWidth={false}
                    size="small">
                    Delete Account
                </Button>
            </Container>
            <AddFundsDialog handleClose={handleFundsDialogClose} open={fundsDialogOpen}/>
        </React.Fragment>
    )
}

export default DrawerContent;
