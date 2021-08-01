import React from "react";
import {Box, Button, Chip, Dialog, DialogActions, DialogContent, Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useSnackbar} from "notistack";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../redux/orders/order-action-creators";

const BuyLoginDialog = ({open, handleClose, bankLogin}) => {

    const useStyles = makeStyles(theme => {
        return {
            caption: {
                fontWeight: 'bold',
                textTransform: 'uppercase'
            },
            value: {},
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            closeButton: {
                paddingTop: 8,
                paddingBottom: 8
            },
            title: {
                textTransform: 'uppercase'
            },
            confirmOrderButton: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const {enqueueSnackbar} = useSnackbar();

    const showNotification = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const {token} = useSelector(state => state.auth);

    const handleOrderConfirm = () => {
        dispatch(createOrder(
            {item: {login: bankLogin._id}, price: bankLogin.price, type: 'Login'},
            token,
            showNotification));
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography
                    className={classes.title}
                    gutterBottom={true}
                    variant="h6"
                    align="center">
                    Order Detail
                </Typography>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Country</Typography>
                <Typography className={classes.value} variant="body2">{bankLogin.bank.country}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Type</Typography>
                <Typography className={classes.value} variant="body2">{bankLogin.type}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Bank</Typography>
                <Typography className={classes.value} variant="body2">{bankLogin.bank.name}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Balance</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    ${parseFloat(bankLogin.balance).toFixed(2)}
                </Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Includes</Typography>
                {bankLogin.includes.length === 0 ? (
                    <Box>
                        <Typography className={classes.value} variant="body2">Nothing included</Typography>
                    </Box>
                ) : (
                    <Grid container={true} spacing={2}>
                        {bankLogin.includes.map(include => {
                            return (
                                <Grid item={true} key={include}>
                                    <Chip label={include} title={include} size="medium" variant="outlined"/>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}

                <Divider variant="fullWidth" className={classes.divider}/>

                <Button
                    fullWidth={true}
                    disableElevation={true}
                    onClick={handleOrderConfirm}
                    variant="contained"
                    size="large"
                    className={classes.confirmOrderButton}>
                    Confirm Order
                </Button>
            </DialogContent>

            <Divider variant="fullWidth" className={classes.divider}/>

            <DialogActions>
                <Button onClick={handleClose} variant="outlined" className={classes.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BuyLoginDialog;