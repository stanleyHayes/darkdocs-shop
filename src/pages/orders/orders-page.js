import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/layout";
import {Container, Hidden, Paper, Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../redux/orders/order-action-creators";
import {green, grey, red} from "@material-ui/core/colors";
import BankLoginsPurchased from "../../components/shared/bank-logins-purchased";
import CCDumpsPinsPurchased from "../../components/shared/cc-dumps-pins-purchased";

const OrdersPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
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
            },
            pending: {
                color: grey['600'],
            },
            completed: {
                color: green['600'],
            },
            cancelled: {
                color: red['600'],
            },
        }
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrders(token));
    }, [dispatch, token])

    const [currentTabIndex, setCurrentTabIndex] = useState('logins');

    const handleTabChange = (event, index) => {
        setCurrentTabIndex(index);
    }

    const getCurrentTabContent = index => {
        switch (index) {
            case 'logins':
                return <BankLoginsPurchased/>;
            case 'dumps':
                return <CCDumpsPinsPurchased/>;
            default:
                return <BankLoginsPurchased/>;
        }
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Hidden mdUp={true}>
                    <Tabs component={Paper} value={currentTabIndex} onChange={handleTabChange} variant="scrollable">
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

export default OrdersPage;
