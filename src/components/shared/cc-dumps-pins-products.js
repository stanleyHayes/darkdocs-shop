import React, {useState} from "react";
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
import {useSelector} from "react-redux";
import {Alert} from "@material-ui/lab";

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
            box: {}
        }
    });
    const classes = useStyles();

    const {dumps, loading, error} = useSelector(state => state.dumps);

    const [page, setPage] = useState(0);
    const handlePageChange = (event, page) => {
        setPage(page);
    }

    return (
        <div className={classes.container}>
            {loading && <LinearProgress variant="query"/>}
            {error && <Alert severity="error" title="Error">{error}</Alert>}
            <Box className={classes.box}>

                <Divider variant="fullWidth" className={classes.divider}/>

                {dumps && dumps.length === 0 ? (
                    <Box>
                        <Typography color="textSecondary" variant="h6" align="center">
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
                                                    color="secondary"
                                                    variant="contained"
                                                    disableElevation={true}
                                                    size="large"
                                                    className={classes.button}>
                                                    Buy
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                            <TablePagination
                                count={dumps.length}
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

export default CCDumpsPinsProducts;
