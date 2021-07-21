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
import {Delete, Edit, Visibility} from "@material-ui/icons";
import {brown, green, red} from "@material-ui/core/colors";

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
        }
    });
    const classes = useStyles();

    const {loading, error} = useSelector(state => state.logins);
    const {orders} = useSelector(state => state.orders);
    const [loginOrders, setLoginOrders] = useState([]);

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

    console.log('Login Orders', loginOrders)

    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
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

                {loginOrders && loginOrders.length === 0 ? (
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
                                    <TableCell>Price</TableCell>
                                    <TableCell>Item Type</TableCell>
                                    <TableCell>Item Balance</TableCell>
                                    <TableCell>Item Bank</TableCell>
                                    <TableCell>Item Includes</TableCell>
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
                                                            className={classes.viewIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Edit className={classes.editIcon}/>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <Delete
                                                            className={classes.deleteIcon}/>
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
                                rowsPerPage={10}
                            />
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </div>
    )
}

export default BankLoginsPurchased;
