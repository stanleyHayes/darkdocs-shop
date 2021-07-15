import React, {useEffect} from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Divider, LinearProgress, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {getOrders} from "../../redux/orders/order-action-creators";

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
            }
        }
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getOrders(token));
    }, [dispatch, token])

    const {orders, loading} = useSelector(state => state.orders);

    return (
        <Layout>
            {loading ? <LinearProgress variant="query"/> :
                (
                    <Container className={classes.container}>
                        <Box className={classes.box}>
                            <Typography
                                color="textSecondary"
                                className={classes.title}
                                variant="h5"
                                gutterBottom={true}>
                                Pending Orders
                            </Typography>

                            <Divider variant="fullWidth" className={classes.divider}/>

                            {orders && orders.length === 0 ? (
                                <Box>
                                    <Typography color="textSecondary" variant="h6" align="center">No Pending Orders</Typography>
                                </Box>
                            ) : (
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>BTC Address</TableCell>
                                                <TableCell>Amount</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Date Created</TableCell>
                                                <TableCell>Date Updated</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {orders && orders.map((order, index) => {
                                                return (
                                                    <TableRow hover={true} key={index}>
                                                        <TableCell>{order.address}</TableCell>
                                                        <TableCell>${parseFloat(order.amount).toFixed(2)}</TableCell>
                                                        <TableCell>
                                                            {order.status}
                                                        </TableCell>
                                                        <TableCell>{moment(new Date(order.createdAt)).fromNow()}</TableCell>
                                                        <TableCell>{moment(new Date(order.updatedAt)).fromNow()}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Box>
                        <Box className={classes.box}>
                            <Typography
                                color="textSecondary"
                                className={classes.title}
                                variant="h5"
                                gutterBottom={true}>
                                Completed Orders
                            </Typography>
                            <Divider variant="fullWidth" className={classes.divider}/>
                            {orders && orders.length === 0 ? (
                                <Box>
                                    <Typography color="textSecondary"  variant="h6" align="center">No Completed Orders</Typography>
                                </Box>
                            ) : (
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>BTC Address</TableCell>
                                                <TableCell>Amount</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Date Created</TableCell>
                                                <TableCell>Date Updated</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {orders && orders.map((order, index) => {
                                                return (
                                                    <TableRow hover={true} key={index}>
                                                        <TableCell>{order.address}</TableCell>
                                                        <TableCell>${parseFloat(order.amount).toFixed(2)}</TableCell>
                                                        <TableCell>
                                                            {order.status}
                                                        </TableCell>
                                                        <TableCell>{moment(new Date(order.createdAt)).fromNow()}</TableCell>
                                                        <TableCell>{moment(new Date(order.updatedAt)).fromNow()}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Box>
                    </Container>
                )}
        </Layout>
    )
}

export default OrdersPage;
