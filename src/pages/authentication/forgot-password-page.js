import React, {useState} from "react";
import {Avatar, Button, Card, CardContent, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {MoneySharp} from "@material-ui/icons";

const ForgotPaswordPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                backgroundColor: theme.palette.background.default,
                minHeight: '100vh'
            },
            textField: {
                marginTop: 8,
                marginBottom: 8
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            button: {
                marginTop: 8,
                marginBottom: 8,
                paddingTop: 8,
                paddingBottom: 8
            },
            link: {
                textDecoration: 'none'
            },
            gridContainer: {
                minHeight: '100vh'
            },
            title: {
                marginTop: 32,
                marginBottom: 32
            }
        }
    });

    const [user, setUser] = useState({});
    const {email} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className={classes.container}>
            <Grid className={classes.gridContainer} container={true} justifyContent="center" alignItems='center'>
                <Grid item={true} xs={12} md={4}>
                    <Container>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <form onSubmit={handleSubmit}>

                                    <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                                        <Grid item={true}>
                                            <Avatar>
                                                <MoneySharp/>
                                            </Avatar>
                                        </Grid>
                                    </Grid>

                                    <Typography className={classes.title} gutterBottom={true} variant="h4" align="center">
                                        Forgot Password
                                    </Typography>

                                    <Typography gutterBottom={true} variant="body2" align="center">
                                        Enter te email address associated with your account and we'll send you a link to
                                        reset your password
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter your email"
                                        margin="normal"
                                        className={classes.textField}
                                        value={email}
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        fullWidth={true}
                                    />


                                    <Button
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth={true}
                                        className={classes.button}
                                        variant="outlined"
                                        size="small">
                                        Continue
                                    </Button>

                                    <Link className={classes.link} to="/auth/login">
                                        <Button fullWidth={true} variant="text" size="small">
                                            Go back to login
                                        </Button>
                                    </Link>
                                </form>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default ForgotPaswordPage;
