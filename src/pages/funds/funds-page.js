import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
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
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../redux/orders/order-action-creators";
import {green, grey, red} from "@material-ui/core/colors";
import {Alert} from "@material-ui/lab";
import {Add, Delete, Edit, Visibility} from "@material-ui/icons";
import moment from "moment";
import AddFundsDialog from "../../components/modals/add-funds-dialog";

const FundsPage = () => {

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
            requestChequeButton: {},
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

    const [status, setStatus] = useState('All');
    const [page, setPage] = useState(0);

    const handlePageChange = (event, page) => {
        setPage(page);
    }

    const handleStatusChange = event => {
        setStatus(event.target.value);
    }

    useEffect(() => {
        dispatch(getOrders(token));
    }, [dispatch, token])

    const {funds, loading, error} = useSelector(state => state.funds);

    const renderStatus = status => {
        switch (status) {
            case 'Completed':
                return <Typography variant="body2" className={classes.completed}>{status}</Typography>
            case 'Cancelled':
                return <Typography variant="body2" className={classes.cancelled}>{status}</Typography>
            case 'Pending':
                return <Typography variant="body2" className={classes.pending}>{status}</Typography>
            default:
                return <Typography variant="body2" className={classes.pending}>{status}</Typography>
        }
    }

    const [openRequestFundsDialog, setOpenRequestFundsDialog] = useState(false);


    const handleRequestFundsDialogClose = () => {
        setOpenRequestFundsDialog(false);
    }

    const handleOpenRequestFundsDialogOpen = () => {
        setOpenRequestFundsDialog(true);
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Box className={classes.box}>
                    <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item={true} xs={12} md={6}>
                            <Typography
                                color="textSecondary"
                                className={classes.title}
                                variant="h5"
                                gutterBottom={true}>
                                Funds
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Select
                                onChange={handleStatusChange}
                                fullWidth={true}
                                label={<Typography variant="body2">Status</Typography>}
                                margin="dense"
                                variant="outlined"
                                value={status}>
                                <MenuItem value='All'>Select Status</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="Cancelled">Cancelled</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Button
                                onClick={handleOpenRequestFundsDialogOpen}
                                startIcon={<Add/>}
                                variant="contained"
                                fullWidth={true}
                                className={classes.requestChequeButton}>
                                Request Funds
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" className={classes.divider}/>

                    {error && <Alert severity="error" title="Error">{error}</Alert>}
                    {loading && <LinearProgress variant="query"/>}
                    {funds && funds.length === 0 ? (
                        <Box>
                            <Typography color="textSecondary" variant="h6" align="center">
                                No Funds
                            </Typography>
                        </Box>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Date Created</TableCell>
                                        <TableCell>Date Updated</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {funds && funds.map((order, index) => {
                                        return (
                                            <TableRow hover={true} key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{order.address}</TableCell>
                                                <TableCell>
                                                    ${parseFloat(order.amount).toFixed(2)}
                                                </TableCell>
                                                <TableCell>
                                                    {renderStatus(order.status)}
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
                                    count={funds.length}
                                    page={page}
                                    onPageChange={handlePageChange}
                                    rowsPerPage={10}
                                />
                            </Table>
                        </TableContainer>
                    )}
                </Box>
            </Container>

            <AddFundsDialog
                handleClose={handleRequestFundsDialogClose}
                open={openRequestFundsDialog}
            />
        </Layout>
    )
}

export default FundsPage;
