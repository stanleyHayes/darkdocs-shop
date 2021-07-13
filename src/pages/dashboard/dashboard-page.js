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
    ListItemAvatar, ListItemText,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {AttachMoney, CheckCircle, Email, Lens, VerifiedUser} from "@material-ui/icons";

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
            },
            card: {
                [theme.breakpoints.up('md')]: {
                    height: 460
                },

            }
        }
    });

    const classes = useStyles();

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
                                <Typography variant="body1" align="center">$500.00</Typography>
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
                                <Typography variant="body1" align="center">Stanley Hayford</Typography>
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
                                <Typography variant="body1" align="center">hayfordstanley@gmail.com</Typography>
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
                                <Typography variant="body1" align="center">Active</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid className={classes.gridContainer} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={1} variant="elevation"  className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom={true} variant="h5">
                                    User Profile
                                </Typography>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Typography variant="caption">
                                    Name
                                </Typography>
                                <Typography variant="body1">
                                    Stanley Hayford
                                </Typography>

                                <Divider variant="fullWidth" light={true} className={classes.divider}/>

                                <Typography variant="caption">
                                    Email
                                </Typography>
                                <Typography variant="body1">
                                    hayfordstanley@gmail.com
                                </Typography>
                                <Divider variant="fullWidth" light={true} className={classes.divider}/>

                                <Typography variant="caption">
                                    Username
                                </Typography>
                                <Typography variant="body1">
                                    sahayford
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Card elevation={1} variant="elevation" className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} align="center" gutterBottom={true} variant="h5">
                                    Do's & Don't
                                </Typography>

                                <Divider variant="fullWidth" className={classes.divider}/>

                                <Typography gutterBottom={true} variant="body2">
                                    The following basic rules are mandatory and should be adhered to strictly as
                                    ignorance is no excuse.
                                </Typography>

                                <List dense={true}>
                                    <ListItem divider={true}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Lens/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            After making an order, all ordered logs will be moved to ORDERS SERVED, this
                                            is to ensure that our logs are still fresh and verified by admin before
                                            being served to the customer. we dont keep old logs
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Lens/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            If you face any issue with any log purchased, just take a shot of it and
                                            send directly to hacksell30@gmail.com to be refund or logs changed within 5
                                            minutes.
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Lens/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            n adding funds, make sure you write down the EXACT amount of btc in dollars
                                            you are sending, any foul play will be punitive. Paste your btc address or
                                            btc where address funds will be coming from for easier verification, and
                                            make sure money is sent to the official Hacksell btc which is
                                            (3E792v1meHHpFj2HvcM5pGdNFiafjAWjQZ) Funds will be approved after
                                            verification from bitcoin
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Lens/>
                                            </Avatar>
                                        </ListItemAvatar>
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
