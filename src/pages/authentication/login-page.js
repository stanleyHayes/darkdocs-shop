import React, {useState} from "react";
import {Avatar, Button, Card, CardContent, Checkbox, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {MoneySharp} from "@material-ui/icons";

const LoginPage = () => {

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
            }
        }
    });

    const [user, setUser] = useState({});
    const {username, email, password} = user;
    const [visible, setVisible] = useState(false);

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleShowPassword = () => {
        setVisible(!visible);
    }

    return (
        <div className={classes.container}>
            <Grid className={classes.gridContainer} container={true} justifyContent="center" alignItems='center'>
                <Grid item={true} xs={12} md={4}>
                    <Container>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                                    <Grid item={true}>
                                        <Avatar>
                                            <MoneySharp />
                                        </Avatar>
                                    </Grid>
                                </Grid>

                                <Typography gutterBottom={true} variant="h5">Sign In</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        label="Username"
                                        placeholder="Enter Username"
                                        margin="dense"
                                        className={classes.textField}
                                        value={username}
                                        type="text"
                                        onChange={handleChange}
                                        name="username"
                                        fullWidth={true}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter email"
                                        margin="dense"
                                        className={classes.textField}
                                        value={email}
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        fullWidth={true}
                                    />

                                    <Grid container={true} spacing={4} alignItems="center">
                                        <Grid item={true}>
                                            <Checkbox checked={visible} onChange={handleShowPassword}/>
                                        </Grid>
                                        <Grid item={true}>
                                            <Typography variant="body2" gutterBottom={true}>
                                                {visible ? 'Hide' : 'Show'}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        placeholder="Enter password"
                                        margin="dense"
                                        className={classes.textField}
                                        value={password}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="password"
                                        fullWidth={true}
                                    />

                                    <Link className={classes.link} to="/auth/forgot-password">
                                        <Button variant="text" size="small">
                                            Forgot Password?
                                        </Button>
                                    </Link>

                                    <Button
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth={true}
                                        className={classes.button}
                                        variant="outlined"
                                        size="small">
                                        Login
                                    </Button>

                                    <Link className={classes.link} to="/auth/register">
                                        <Button variant="text" size="small">
                                            Don' have an account? Register
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

export default LoginPage;
