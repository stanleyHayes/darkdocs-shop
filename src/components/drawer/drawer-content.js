import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Box, Button, Container, Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {
    Close,
    CreditCard,
    Dashboard,
    DeleteForever,
    Edit,
    ExitToApp,
    LockOpen,
    MenuBook,
    MonetizationOn,
    Receipt, ShoppingBasket,
    VerifiedUser
} from "@material-ui/icons";

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
                paddingBottom: 8,
                textTransform: 'capitalize'
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

                    <Link className={classes.link} to="/funds">
                        <Button
                            className={classes.button}
                            startIcon={<MonetizationOn/>}
                            fullWidth={false}
                            size="small">
                            Funds
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/orders">
                        <Button
                            startIcon={<ShoppingBasket/>}
                            className={classes.button}
                            fullWidth={false}
                            size="small">
                            Orders
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/products">
                        <Button
                            startIcon={<CreditCard/>}
                            size="small"
                            className={classes.button}
                            fullWidth={false}
                            variant="text">
                            Bank Logs & CC Dumps
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    <Link className={classes.link} to="/cheques">
                        <Button
                            className={classes.button}
                            startIcon={<Receipt/>}
                            size="small"
                            variant="text">Cheques</Button>
                    </Link>
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
        </React.Fragment>
    )
}

export default DrawerContent;
