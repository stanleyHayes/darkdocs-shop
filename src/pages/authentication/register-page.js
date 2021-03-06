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
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../redux/authentication/auth-action-creators";
import {Alert} from "@material-ui/lab";
import {useSnackbar} from "notistack";

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
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: theme.palette.primary.main,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                }
            },
            link: {
                textDecoration: 'none'
            },
            gridContainer: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            title: {
                marginTop: 16,
                marginBottom: 16
            },
            image: {
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            },
            logo: {
                width: 100,
                height: 100
            }
        }
    });
    const classes = useStyles();

    const [user, setUser] = useState({});
    const {username, email, name, password, confirmPassword} = user;
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState({});

    const {loading, error: authError} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const history = useHistory();

    const {enqueueSnackbar} = useSnackbar();

    const showNotification = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!username) {
            setError({error, username: 'Field required'});
            return;
        } else {
            setError({error, username: null});
        }

        if (!email) {
            setError({...error, email: 'Field required'});
            return;
        }else {
            setError({error, email: null});
        }

        if (!name) {
            setError({...error, name: 'Field required'});
            return;
        }else {
            setError({error, name: null});
        }

        if (!password) {
            setError({...error, password: 'Field required'});
            return;
        }else {
            setError({error, password: null});
        }

        if (!confirmPassword) {
            setError({...error, confirmPassword: 'Field required'});
            return;
        }else {
            setError({error, confirmPassword: null});
        }

        if (confirmPassword !== password) {
            setError({...error, confirmPassword: 'Password mismatch', password: 'Password mismatch'});
            return;
        }else {
            setError({error, confirmPassword: null,  password: null});
        }
        dispatch(signUp(user, history, showNotification));
    }

    const handleShowPassword = () => {
        setVisible(!visible);
    }


    return (
        <div className={classes.container}>
            <Container className={classes.gridContainer}>
                <Grid container={true} justifyContent="center" alignItems="center">
                    <Grid item={true}>
                        <Avatar className={classes.logo} variant="rounded">
                            <img className={classes.image} alt="logo" src="/images/logo.png"/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Typography
                    color="textPrimary"
                    className={classes.title}
                    align="center"
                    gutterBottom={true}
                    variant="h4">
                    Darkdocs Shop
                </Typography>
                <Grid container={true} justifyContent="center" alignItems='center'>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={1}>
                            {loading && <LinearProgress variant="query"/>}
                            <CardContent>
                                {authError &&
                                <Alert severity="error" variant="standard" title="Error">
                                    {authError}
                                </Alert>}
                                <form onSubmit={handleSubmit}>
                                    <Typography
                                        color="textPrimary"
                                        className={classes.title}
                                        align="center"
                                        variant="h5">
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
                                            <Typography color="textPrimary" variant="body2" gutterBottom={true}>
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
                                        size="large">
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RegisterPage;
