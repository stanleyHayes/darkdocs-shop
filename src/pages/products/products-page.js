import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {Container, Hidden, Paper, Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {green, grey, red} from "@material-ui/core/colors";
import BankLoginsProducts from "../../components/shared/bank-logins-products";
import CCDumpsPinsProducts from "../../components/shared/cc-dumps-pins-products";

const ProductsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            title: {
                textTransform: 'uppercase'
            },
            box: {
                marginBottom: 32
            },
            editIcon: {
                color: grey['300'],
                cursor: 'pointer'
            },
            viewIcon: {
                color: green['600'],
                cursor: 'pointer'
            },
            deleteIcon: {
                color: red['600'],
                cursor: 'pointer'
            }
        }
    });
    const classes = useStyles();

    const [currentTabIndex, setCurrentTabIndex] = useState('logins');

    const handleTabChange = (event, index) => {
        setCurrentTabIndex(index);
    }

    const getCurrentTabContent = index => {
        switch (index) {
            case 'logins':
                return <BankLoginsProducts/>;
            case 'dumps':
                return <CCDumpsPinsProducts/>;
            default:
                return <BankLoginsProducts/>;
        }
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Hidden mdUp={true}>
                    <Tabs component={Paper} value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab value="logins" label="Bank Logins"/>
                        <Tab value="dumps" label="CC Dumps+ Pins"/>
                    </Tabs>
                </Hidden>
                <Hidden smDown={true}>
                    <Tabs component={Paper} value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab value="logins" label="Bank Logins"/>
                        <Tab value="dumps" label="CC Dumps+ Pins"/>
                    </Tabs>
                </Hidden>

                {getCurrentTabContent(currentTabIndex)}

            </Container>
        </Layout>
    )
}

export default ProductsPage;
