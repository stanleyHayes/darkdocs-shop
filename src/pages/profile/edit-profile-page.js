import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {Button, Card, CardContent, Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const EditProfilePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
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
            }
        }
    });

    const [user, setUser] = useState({});
    const {username, email, name, city, country, postalCode} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={8} lg={6}>
                        <Card elevation={1} variant="elevation">
                            <CardContent>
                            <Typography gutterBottom={true} variant="h6" align="center">
                                Edit Profile
                            </Typography>

                            <Divider variant="fullWidth" className={classes.divider}/>

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
                                    label="Country"
                                    placeholder="Enter country"
                                    margin="dense"
                                    className={classes.textField}
                                    value={country}
                                    type="text"
                                    onChange={handleChange}
                                    name="country"
                                    fullWidth={true}
                                />

                                <TextField
                                    variant="outlined"
                                    label="City"
                                    placeholder="Enter city"
                                    margin="dense"
                                    className={classes.textField}
                                    value={city}
                                    type="text"
                                    onChange={handleChange}
                                    name="city"
                                    fullWidth={true}
                                />

                                <TextField
                                    variant="outlined"
                                    label="Postal Code"
                                    placeholder="Enter postal code"
                                    margin="dense"
                                    className={classes.textField}
                                    value={postalCode}
                                    type="number"
                                    onChange={handleChange}
                                    name="postalCode"
                                    fullWidth={true}
                                />

                                <Button fullWidth={true} className={classes.button} variant="outlined" size="small">
                                    Update Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default EditProfilePage;
