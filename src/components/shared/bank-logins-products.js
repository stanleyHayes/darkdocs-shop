import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
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
import {useDispatch, useSelector} from "react-redux";
import {getBanks} from "../../redux/banks/banks-action-creators";
import {getLogins} from "../../redux/logins/logins-action-creators";
import {useSnackbar} from "notistack";

const BankLoginsProducts = () => {

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
                borderWidth: 2,
                borderStyle: 'solid',
                backgroundColor: theme.palette.primary.main,
                transition: 'all 300ms ease-in-out',
                borderRadius: 32,
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                }
            },
            logo: {
                width: 100,
                height: 100
            },
            title: {
                textTransform: 'uppercase'
            },
        }
    });
    const classes = useStyles();

    const {logins, loading, error} = useSelector(state => state.logins);
    const {token} = useSelector(state => state.auth);
    const {banks} = useSelector(state => state.banks);
    const dispatch = useDispatch();

    const [country, setCountry] = useState('All');
    const [bank, setBank] = useState('All');

    const query = `${country === 'All' ? '' : `country=${country}`}${country !== 'All' && bank !== 'All' ? '&' : ''}${bank === 'All' ? '' : `bank=${bank}`}`;

    const {enqueueSnackbar} = useSnackbar();

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

    useEffect(() => {
        dispatch(getBanks(token));
    }, [dispatch, token]);

    useEffect(() => {
        const showNotification = (message, options) => {
            enqueueSnackbar(message, options);
        }
        dispatch(getLogins(token, query, showNotification));
    }, [dispatch, enqueueSnackbar, query, token]);

    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
            {error && <Alert variant="standard" severity="error" title="Error">{error}</Alert>}
            <Box className={classes.box}>
                <Grid container={true} justifyContent="space-between" spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Typography
                            color="textSecondary"
                            className={classes.title}
                            variant="h5"
                            gutterBottom={true}>
                            Bank Logins ({logins.length})
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
                            <MenuItem value="UK">UK</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
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
                            {banks && banks.map((b, i) => {
                                return (
                                    <MenuItem key={i} value={b._id}>{b.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider}/>

                {logins && logins.length === 0 ? (
                    <Box>
                        <Typography className={classes.title} color="textSecondary" variant="h6">
                            No bank logins available
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
                                    <TableCell>Bank</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Balance</TableCell>
                                    <TableCell>Includes</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {logins && logins.map((login, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{login.type}</TableCell>
                                            <TableCell>
                                                ${parseFloat(login.price).toFixed(2)}
                                            </TableCell>
                                            <TableCell>{login.bank.name}</TableCell>
                                            <TableCell>{login.bank.country}</TableCell>
                                            <TableCell>
                                                ${parseFloat(login.balance).toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                {login.includes === 0 ? <Typography>
                                                    Nothing Included
                                                </Typography> : (
                                                    <Typography variant="body2">
                                                        {login.includes.join(', ')}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    disableElevation={true}
                                                    size="small"
                                                    color="secondary"
                                                    className={classes.button}>
                                                    Buy
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TablePagination
                                count={logins.length}
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

export default BankLoginsProducts;
