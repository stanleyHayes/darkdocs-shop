import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Divider,
    Grid,
    Hidden,
    LinearProgress,
    MenuItem,
    Paper,
    Select,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {getOrders} from "../../redux/orders/order-action-creators";
import {green, grey, red} from "@material-ui/core/colors";
import {Delete, Edit, Visibility} from "@material-ui/icons";
import {Alert} from "@material-ui/lab";
import BankLoginsProducts from "../../components/shared/bank-logins-products";
import CCDumpsPinsProducts from "../../components/shared/cc-dumps-pins-products";

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

    const [type, setType] = useState('All');
    const [status, setStatus] = useState('All');
    const [page, setPage] = useState(0);
    const handlePageChange = (event, page) => {
        setPage(page);
    }

    const handleTypeChange = event => {
        setType(event.target.value);
    }

    const handleStatusChange = event => {
        setStatus(event.target.value);
    }

    useEffect(() => {
        dispatch(getOrders(token));
    }, [dispatch, token])

    const {orders, loading, error} = useSelector(state => state.orders);

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
                <Hidden smDown={true}>
                    <Tabs component={Paper} value={currentTabIndex} onChange={handleTabChange} variant="scrollable">
                        <Tab value="logins" label="Bank Logins"/>
                        <Tab value="dumps" label="CC Dumps+ Pins"/>
                    </Tabs>
                </Hidden>
                <Tabs component={Paper}  value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                    <Tab value="logins" label="Bank Logins"/>
                    <Tab value="dumps" label="CC Dumps+ Pins"/>
                </Tabs>

                {getCurrentTabContent(currentTabIndex)}
            </Container>

            {loading ? <LinearProgress variant="query"/> :
                (
                    <Container className={classes.container}>
                        {error && <Alert title="Error">{error}</Alert>}
                        <Box className={classes.box}>
                            <Grid container={true} justifyContent="space-between">
                                <Grid item={true} xs={12} md={4}>
                                    <Typography
                                        color="textSecondary"
                                        className={classes.title}
                                        variant="h5"
                                        gutterBottom={true}>
                                        Orders
                                    </Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Select
                                        onChange={handleTypeChange}
                                        fullWidth={false}
                                        label={<Typography variant="body2">Status</Typography>}
                                        margin="dense"
                                        variant="outlined"
                                        value={type}>
                                        <MenuItem value='All'>Select Status</MenuItem>
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
                                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Select
                                        onChange={handleStatusChange}
                                        fullWidth={false}
                                        label={<Typography variant="body2">Type</Typography>}
                                        margin="dense"
                                        variant="outlined"
                                        value={status}>
                                        <MenuItem value='All'>Select Type</MenuItem>
                                        <MenuItem value="Cheque">Cheque</MenuItem>
                                        <MenuItem value="Dump">CC Dump + Pins</MenuItem>
                                        <MenuItem value="Login">Bank Logins</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            <Divider variant="fullWidth" className={classes.divider}/>

                            {orders && orders.length === 0 ? (
                                <Box>
                                    <Typography color="textSecondary" variant="h6" align="center">
                                        No Orders
                                    </Typography>
                                </Box>
                            ) : (
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>#</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Price</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Date Created</TableCell>
                                                <TableCell>Date Updated</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {orders && orders.map((order, index) => {
                                                return (
                                                    <TableRow hover={true} key={index}>
                                                        <TableCell>{index + 1}</TableCell>
                                                        <TableCell>{order.type}</TableCell>
                                                        <TableCell>
                                                            ${parseFloat(order.price).toFixed(2)}
                                                        </TableCell>
                                                        <TableCell>
                                                            {order.status}
                                                        </TableCell>
                                                        <TableCell>{moment(new Date(order.createdAt)).fromNow()}</TableCell>
                                                        <TableCell>{moment(new Date(order.updatedAt)).fromNow()}</TableCell>
                                                        <TableCell>
                                                            <Grid container={true} spacing={1}>
                                                                <Grid item={true}>
                                                                    <Visibility className={classes.viewIcon}/>
                                                                </Grid>
                                                                <Grid item={true}>
                                                                    <Edit className={classes.editIcon}/>
                                                                </Grid>
                                                                <Grid item={true}>
                                                                    <Delete className={classes.deleteIcon}/>
                                                                </Grid>
                                                            </Grid>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                        <TablePagination
                                            count={orders.length}
                                            page={page}
                                            onPageChange={handlePageChange}
                                            rowsPerPage={10}
                                        />
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
