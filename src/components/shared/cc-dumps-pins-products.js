import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Divider,
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
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";
import {useSnackbar} from "notistack";
import {getDumps} from "../../redux/dumps/dumps-action-creators";
import BuyCCDumpsDialog from "../modals/buy-cc-dumps-dialog";

const CCDumpsPinsProducts = () => {

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
                borderColor: 'white',
                borderWidth: 2,
                borderStyle: 'solid',
                backgroundColor: theme.palette.primary.main,
                borderRadius: 32,
                transition: 'all 300ms ease-in-out',
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
            box: {}
        }
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);
    const [page, setPage] = useState(0);
    const query = `page=${page + 1}`;
    const {enqueueSnackbar} = useSnackbar();

    const {dumps, loading, error, ccDumpsCount} = useSelector(state => state.dumps);

    const [selectedCCDump, setSelectedCCDump] = useState(null);
    const handlePageChange = (event, page) => {
        setPage(page);
    }

    useEffect(() => {
        const showNotification = (message, options) => {
            enqueueSnackbar(message, options);
        }
        dispatch(getDumps(token, query, showNotification));
    }, [dispatch, enqueueSnackbar, query, token]);

    const handleBuyCCDump = ccDump => {
        setSelectedCCDump(ccDump);
    }

    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
            {error && <Alert severity="error" title="Error">{error}</Alert>}
            <Box className={classes.box}>

                <Divider variant="fullWidth" className={classes.divider}/>

                {dumps && dumps.length === 0 ? (
                    <Box>
                        <Typography className={classes.title} color="textSecondary" variant="h6">
                            No CC Dumps + Pins available
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
                                    <TableCell>Price</TableCell>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dumps && dumps.map((dump, index) => {
                                    return (
                                        <TableRow hover={true} key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{dump.service}</TableCell>
                                            <TableCell>
                                                {dump.type}
                                            </TableCell>
                                            <TableCell>
                                                {dump.countryMark}
                                            </TableCell>
                                            <TableCell>
                                                {dump.bankBase}
                                            </TableCell>
                                            <TableCell>
                                                {dump.quantity}
                                            </TableCell>
                                            <TableCell>
                                                ${parseFloat(dump.price).toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    onClick={() => handleBuyCCDump(dump)}
                                                    color="secondary"
                                                    variant="contained"
                                                    disableElevation={true}
                                                    size="small"
                                                    className={classes.button}>
                                                    Buy
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TablePagination
                                count={ccDumpsCount}
                                page={page}
                                onPageChange={handlePageChange}
                                rowsPerPage={20}
                            />
                        </Table>
                    </TableContainer>
                )}
            </Box>

            {selectedCCDump &&
            <BuyCCDumpsDialog
                open={Boolean(selectedCCDump)}
                ccDump={selectedCCDump}
                handleClose={() => setSelectedCCDump(null)}
            />
            }
        </div>
    )
}

export default CCDumpsPinsProducts;
