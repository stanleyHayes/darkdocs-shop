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
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changePassword} from "../../redux/authentication/auth-action-creators";

const ResetPasswordPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                backgroundColor: theme.palette.background.default,
                minHeight: '83vh'
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
    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState({});
    const [visible, setVisible] = useState(false);

    const {loading, error: authError, token} = useSelector(state => state.auth);

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!user.newPassword) {
            setHasError(true);
            setError({...error, "newPassword": 'Field required'});
        }

        if (!user.confirmNewPassword) {
            setHasError(true);
            setError({...error, "confirmNewPassword": 'Field required'});
        }

        if (user.newPassword !== user.confirmNewPassword) {
            setHasError(true);
            setError({...error, "currentPassword": 'Password mismatch', "confirmNewPassword": 'Password mismatch'});
        }

        if (hasError) {
            return;
        } else {
            console.log(error);
            dispatch(changePassword(user, token, history));
        }
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
                    <Grid item={true} xs={12} md={6}>
                        <Card variant="elevation" elevation={1}>
                            {loading && <LinearProgress variant="query"/>}
                            <CardContent>
                                {authError && <Typography variant="body2" color="error" align="center">
                                    {authError}
                                </Typography>}
                                <form onSubmit={handleSubmit}>
                                    <Typography
                                        className={classes.title}
                                        gutterBottom={true}
                                        variant="h5"
                                        align="center">
                                        Reset Password
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter email"
                                        margin="normal"
                                        className={classes.textField}
                                        value={user.email}
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
                                        label="OTP"
                                        placeholder="Enter your otp"
                                        margin="normal"
                                        className={classes.textField}
                                        value={user.otp}
                                        type="number"
                                        onChange={handleChange}
                                        name="otp"
                                        fullWidth={true}
                                        required={true}
                                        error={Boolean(error)}
                                        helperText={error}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="New Password"
                                        placeholder="Enter new password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={user.newPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="newPassword"
                                        fullWidth={true}
                                        required={true}
                                        error={Boolean(error.newPassword)}
                                        helperText={error.newPassword}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Confirm Password"
                                        placeholder="Confirm new password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={user.confirmNewPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="confirmNewPassword"
                                        fullWidth={true}
                                        required={true}
                                        error={Boolean(error.confirmNewPassword)}
                                        helperText={error.confirmNewPassword}
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
                                        size="large">
                                        Reset Password
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ResetPasswordPage;
