import React, {useState} from "react";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link, useHistory} from "react-router-dom";
import {MoneySharp} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../redux/authentication/auth-action-creators";

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
            },
            title: {
                marginTop: 32,
                marginBottom: 32
            }
        }
    });
    const classes = useStyles();

    const [user, setUser] = useState({});
    const {username, email, name, password, confirmPassword} = user;
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState({});
    const [hasError, setHasError] = useState(false);

    const {loading, error: authError} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!username) {
            setError({...error, username: 'Field required'});
            setHasError(true);
        }

        if (!email) {
            setError({...error, email: 'Field required'});
            setHasError(true);
        }

        if (!name) {
            setError({...error, name: 'Field required'});
            setHasError(true);
        }

        if (!password) {
            setError({...error, password: 'Field required'});
            setHasError(true);
        }

        if (!confirmPassword) {
            setError({...error, confirmPassword: 'Field required'});
            setHasError(true);
        }

        if (confirmPassword !== password) {
            setError({...error, confirmPassword: 'Password mismatch', password: 'Password mismatch'});
            setHasError(true);
        }

        if (hasError) {
            return;
        }else {
            dispatch(signUp(user, history));
        }
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
                            {loading && <LinearProgress variant="query"/>}
                            <CardContent>
                                {authError && <Typography variant="body2" color="error" align="center">{authError}</Typography> }
                                <form onSubmit={handleSubmit}>
                                    <Grid container={true} spacing={4} justifyContent="center" alignItems="center">
                                        <Grid item={true}>
                                            <Avatar>
                                                <MoneySharp/>
                                            </Avatar>
                                        </Grid>
                                    </Grid>

                                    <Typography className={classes.title} align="center" variant="h4">
                                        Sign Up
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        label="Username"
                                        placeholder="Enter Username"
                                        margin="normal"
                                        className={classes.textField}
                                        value={username}
                                        type="text"
                                        onChange={handleChange}
                                        name="username"
                                        required={true}
                                        fullWidth={true}
                                        error={Boolean(error.username)}
                                        helperText={error.username}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter email"
                                        margin="normal"
                                        className={classes.textField}
                                        value={email}
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        required={true}
                                        fullWidth={true}
                                        error={Boolean(error.email)}
                                        helperText={error.email}
                                    />


                                    <TextField
                                        variant="outlined"
                                        label="Name"
                                        placeholder="Enter Name"
                                        margin="normal"
                                        className={classes.textField}
                                        value={name}
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        required={true}
                                        fullWidth={true}
                                        error={Boolean(error.name)}
                                        helperText={error.name}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        placeholder="Enter password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={password}
                                        onChange={handleChange}
                                        name="password"
                                        type={visible ? 'text' : 'password'}
                                        fullWidth={true}
                                        required={true}
                                        error={Boolean(error.password)}
                                        helperText={error.password}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Confirm password"
                                        placeholder="Confirm password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={confirmPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        fullWidth={true}
                                        required={true}
                                        error={Boolean(error.confirmPassword)}
                                        helperText={error.confirmPassword}
                                    />

                                    <Grid container={true} spacing={2} alignItems="center">
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
                                        disabled={loading}
                                        type="submit"
                                        onClick={handleSubmit}
                                        fullWidth={true}
                                        className={classes.button}
                                        variant="outlined"
                                        size="small">
                                        Register
                                    </Button>

                                    <Link className={classes.link} to="/auth/login">
                                        <Button fullWidth={true} variant="text" size="small">
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
