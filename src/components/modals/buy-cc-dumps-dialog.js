import React from "react";
import {Button, Dialog, DialogActions, DialogContent, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useSnackbar} from "notistack";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../redux/orders/order-action-creators";

const BuyCCDumpsDialog = ({open, handleClose, ccDump}) => {

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
            {item: {ccDumps: ccDump._id}, price: ccDump.price, type: 'Dump'},
            token,
            showNotification));
        handleClose();
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography className={classes.title} gutterBottom={true} variant="h6" align="center">Order
                    Detail</Typography>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Service</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.service}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Bin</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.bin}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Country Mark</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.countryMark}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Type</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.type}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Dumped In</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.dumpedIn}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Bank Base</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.bankBase}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Quantity</Typography>
                <Typography className={classes.value} variant="body2">{ccDump.quantity}</Typography>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography gutterBottom={true} className={classes.caption} variant="caption">Price</Typography>
                <Typography
                    className={classes.value}
                    variant="body2">
                    ${parseFloat(ccDump.price).toFixed(2)}
                </Typography>

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

export default BuyCCDumpsDialog;