import React from "react";
import Layout from "../../components/layout/layout";
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const RegisterPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h3" align="center">Register Page</Typography>
            </Container>
        </Layout>
    )
}

export default RegisterPage;
