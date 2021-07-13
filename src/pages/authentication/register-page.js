import React, {useState} from "react";
import {Avatar, Button, Card, CardContent, Checkbox, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {MoneySharp} from "@material-ui/icons";

const RegisterPage = () => {

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
    const {username, email, name, password, confirmPassword} = user;
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
                                <form onSubmit={handleSubmit}>

                                    <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                                        <Grid item={true}>
                                            <Avatar>
                                                <MoneySharp />
                                            </Avatar>
                                        </Grid>
                                    </Grid>

                                    <Typography variant="h5">Sign Up</Typography>

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


                                    <TextField
                                        variant="outlined"
                                        label="Name"
                                        placeholder="Enter Name"
                                        margin="dense"
                                        className={classes.textField}
                                        value={name}
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        fullWidth={true}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        placeholder="Enter password"
                                        margin="dense"
                                        className={classes.textField}
                                        value={password}
                                        onChange={handleChange}
                                        name="name"
                                        type={visible ? 'text' : 'pasword'}
                                        fullWidth={true}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Confirm password"
                                        placeholder="Confirm password"
                                        margin="dense"
                                        className={classes.textField}
                                        value={confirmPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="confirmPassword"
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
                                    <Button
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth={true}
                                        className={classes.button}
                                        variant="outlined"
                                        size="small">
                                        Register
                                    </Button>

                                    <Link className={classes.link} to="/auth/login">
                                        <Button variant="text" size="small">
                                            Already have an account? Login
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

export default RegisterPage;
