import React, {useEffect, useState} from "react";
import {
    Box,
    Divider,
    Grid,
    LinearProgress,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import {selectBankLogins} from "../../redux/orders/order-reducer";
import {Visibility} from "@material-ui/icons";
import {brown, green, red} from "@material-ui/core/colors";
import ViewOrderDetailDialog from "../modals/view-order-detail-dialog";

const BankLoginsPurchased = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
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
            },
            logo: {
                width: 100,
                height: 100
            },
            title: {
                textTransform: 'uppercase'
            },
            editIcon: {
                color: brown['600'],
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
            emptyText: {
                textTransform: 'uppercase'
            },
            box: {
                marginTop: 16
            }
        }
    });
    const classes = useStyles();

    const {loading, error} = useSelector(state => state.logins);
    const {orders, loading: orderLoading} = useSelector(state => state.orders);
    const [loginOrders, setLoginOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        if (orders) {
            setLoginOrders(selectBankLogins(orders));
        }
    }, [orders]);

    const [country, setCountry] = useState('All');
    const [bank, setBank] = useState('All');

    const [page, setPage] = useState(0);
    const handlePageChange = (event, page) => {
        setPage(page);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleBankChange = (event) => {
        setBank(event.target.value);
    }

    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
            {orderLoading && <LinearProgress variant="query"/>}
            {error && <Alert severity="error" title="Error">{error}</Alert>}
            <Box className={classes.box}>
                <Grid container={true} justifyContent="space-between" spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Typography
                            color="textSecondary"
                            className={classes.title}
                            variant="h5"
                            gutterBottom={true}>
                            Bank Logins ({loginOrders && loginOrders.length})
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Select
                            onChange={handleCountryChange}
                            fullWidth={true}
                            label={<Typography variant="body2">Country</Typography>}
                            margin="dense"
                            variant="outlined"
                            value={country}>
                            <MenuItem value='All'>Select Country</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Select
                            onChange={handleBankChange}
                            fullWidth={true}
                            label={<Typography variant="body2">Type</Typography>}
                            margin="dense"
                            variant="outlined"
                            value={bank}>
                            <MenuItem value='All'>Select Bank</MenuItem>
                            <MenuItem value="Cheque">Cheque</MenuItem>
                            <MenuItem value="Dump">CC Dump + Pins</MenuItem>
                            <MenuItem value="Login">Bank Logins</MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider}/>

                {orderLoading && <LinearProgress variant="query"/>}

                {loginOrders && loginOrders.length === 0 ? (
                    <Box className={classes.box}>
                        <Typography className={classes.emptyText} color="textSecondary" variant="h6">
                            No bank login Orders
                        </Typography>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Balance</TableCell>
                                    <TableCell>Bank</TableCell>
                                    <TableCell>Includes</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loginOrders && loginOrders.map((login, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                ${parseFloat(login.price).toFixed(2)}
                                            </TableCell>
                                            <TableCell>{login.item.login.type}</TableCell>
                                            <TableCell>
                                                ${parseFloat(login.item.login.balance).toFixed(2)}
                                            </TableCell>
                                            <TableCell>{login.item.login.bank.name}</TableCell>
                                            <TableCell>
                                                {login.item.login.includes === 0 ? <Typography>
                                                    Nothing Included
                                                </Typography> : (
                                                    <Typography variant="body2">
                                                        {login.item.login.includes.join(', ')}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Grid container={true} spacing={1}>
                                                    <Grid item={true}>
                                                        <Visibility
                                                            onClick={() => setSelectedOrder(login)}
                                                            className={classes.viewIcon}/>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TablePagination
                                count={loginOrders.length}
                                page={page}
                                onPageChange={handlePageChange}
                                rowsPerPage={20}
                            />
                        </Table>
                    </TableContainer>
                )}
            </Box>
            {selectedOrder &&
            <ViewOrderDetailDialog
                order={selectedOrder}
                open={Boolean(selectedOrder)}
                handleClose={() => setSelectedOrder(null)}
            />}
        </div>
    )
}

export default BankLoginsPurchased;
