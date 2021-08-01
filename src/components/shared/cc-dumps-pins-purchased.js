import React, {useEffect, useState} from "react";
import {
    Box,
    Divider,
    Grid,
    LinearProgress,
    Paper,
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
import {selectCCDumps} from "../../redux/orders/order-reducer";
import {brown, green, red} from "@material-ui/core/colors";
import {Delete, Edit, Visibility} from "@material-ui/icons";

const CCDumpsPinsPurchased = () => {

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
            box: {
                marginTop: 16
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
        }
        }
    });
    const classes = useStyles();

    const {loading, error} = useSelector(state => state.dumps);
    const {orders} = useSelector(state => state.orders);

    const [dumpOrders, setDumpOrders] = useState([]);

    useEffect(() => {
        if (orders) {
            setDumpOrders(selectCCDumps(orders));
        }
    }, [orders]);

    const [page, setPage] = useState(0);

    const handlePageChange = (event, page) => {
        setPage(page);
    }

    console.log('Dump Orders', dumpOrders)
    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
            {error && <Alert variant="standard" severity="error" title="Error">{error}</Alert>}
            <Box>

                <Divider variant="fullWidth" className={classes.divider}/>

                {dumpOrders && dumpOrders.length === 0 ? (
                    <Box className={classes.box}>
                        <Typography color="textSecondary" variant="h6" className={classes.emptyText}>
                            No CC Dumps + Pins
                        </Typography>
                    </Box>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Service</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Country Mark</TableCell>
                                    <TableCell>Bank Base</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Item Price</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dumpOrders && dumpOrders.map((dump, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{dump.item.ccDumps.service}</TableCell>
                                            <TableCell>
                                                {dump.item.ccDumps.type}
                                            </TableCell>
                                            <TableCell>
                                                {dump.item.ccDumps.countryMark}
                                            </TableCell>
                                            <TableCell>
                                                {dump.item.ccDumps.bankBase}
                                            </TableCell>
                                            <TableCell>
                                                {dump.item.ccDumps.quantity}
                                            </TableCell>
                                            <TableCell>
                                                ${parseFloat(dump.item.ccDumps.price).toFixed(2)}
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
                                count={dumpOrders.length}
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

export default CCDumpsPinsPurchased;
