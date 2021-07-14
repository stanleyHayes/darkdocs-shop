import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {Avatar, Button, Card, CardContent, Checkbox, Container, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {MoneySharp} from "@material-ui/icons";

const ChangePasswordPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                backgroundColor: theme.palette.background.default
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
                paddingTop: 32
            },
            title: {
                marginTop: 32,
                marginBottom: 32
            }
        }
    });

    const classes = useStyles();

    const [passwords, setPasswords] = useState({});
    const {currentPassword, newPassword, confirmNewPassword} = passwords;

    const [visible, setVisible] = useState(false);

    const handleChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleShowPassword = () => {
        setVisible(!visible);
    }
    return (
        <Layout>
            <Container className={classes.container}>
                <Grid className={classes.gridContainer} container={true} justifyContent="center" alignItems='center'>
                    <Grid item={true} xs={12} md={6}>
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
                                        Change Password
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        label="Current password"
                                        placeholder="Enter your current password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={currentPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="currentPassword"
                                        fullWidth={true}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="New Password"
                                        placeholder="Enter new password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={newPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="newPassword"
                                        fullWidth={true}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Confirm Password"
                                        placeholder="Confirm new password"
                                        margin="normal"
                                        className={classes.textField}
                                        value={confirmNewPassword}
                                        type={visible ? 'text' : 'password'}
                                        onChange={handleChange}
                                        name="confirmNewPassword"
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
                                        Change Password
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ChangePasswordPage;
