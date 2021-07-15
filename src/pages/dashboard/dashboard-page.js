import React from "react";
import Layout from "../../components/layout/layout";
import {
    Avatar,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {AttachMoney, CheckCircle, Email, VerifiedUser} from "@material-ui/icons";
import {Skeleton} from "@material-ui/lab";
import {useSelector} from "react-redux";

const DashboardPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            gridContainer: {
                marginBottom: 32
            },
            title: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();

    const {loading, user} = useSelector(state => state.auth);

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid className={classes.gridContainer} container={true} spacing={2} justifyContent="center"
                      alignItems="center">
                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid justifyContent="center" container={true}>
                                    <Grid item={true}>
                                        <Avatar>
                                            <AttachMoney/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Typography gutterBottom={true} variant="h4" align="center">Balance</Typography>
                                {loading ? <Skeleton variant="text"/> : (
                                    <Typography align="center" variant="body1">
                                        ${user && parseFloat(user.balance).toFixed(2)}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid justifyContent="center" container={true}>
                                    <Grid item={true}>
                                        <Avatar>
                                            <VerifiedUser/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Typography gutterBottom={true} variant="h4" align="center">User</Typography>
                                {loading ? <Skeleton variant="text"/> : (
                                    <Typography align="center" variant="body1">
                                        {user && user.name}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid justifyContent="center" container={true}>
                                    <Grid item={true}>
                                        <Avatar>
                                            <Email/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Typography gutterBottom={true} variant="h4" align="center">Email</Typography>
                                {loading ? <Skeleton variant="text"/> : (
                                    <Typography align="center" variant="body1">
                                        {user && user.email}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid justifyContent="center" container={true}>
                                    <Grid item={true}>
                                        <Avatar>
                                            <CheckCircle/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Typography gutterBottom={true} variant="h4" align="center">Status</Typography>
                                {loading ? <Skeleton variant="text"/> : (
                                    <Typography align="center" variant="body1">
                                        {user && user.status}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid className={classes.gridContainer} container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Card elevation={1} variant="elevation">
                            <CardContent>
                                <Typography className={classes.title} align="center" gutterBottom={true} variant="h5">
                                    Do's & Don't
                                </Typography>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Typography align="center" gutterBottom={true} variant="body2">
                                    The following basic rules are mandatory and should be adhered to strictly as
                                    ignorance is no excuse.
                                </Typography>

                                <List dense={true}>
                                    <ListItem divider={true}>
                                        <ListItemText>
                                            After making an order, all ordered logs will be moved to ORDERS SERVED, this
                                            is to ensure that our logs are still fresh and verified by admin before
                                            being served to the customer. we dont keep old logs
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem divider={true}>
                                        <ListItemText>
                                            If you face any issue with any log purchased, just take a shot of it and
                                            send directly to hacksell30@gmail.com to be refund or logs changed within 5
                                            minutes.
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem divider={true}>
                                        <ListItemText>
                                            When adding funds, make sure you write down the EXACT amount of btc in dollars
                                            you are sending, any foul play will be punitive. Paste your btc address or
                                            btc where address funds will be coming from for easier verification, and
                                            make sure money is sent to the official Hacksell btc which is
                                            (bc1quvwx4008j0fn3u73uqa9qlhzz8nvmr8axc5zya) Funds will be approved after
                                            verification from bitcoin
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText>
                                            Inactive for a month account will be deleted
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default DashboardPage;
