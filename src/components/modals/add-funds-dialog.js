import React, {useState} from "react";
import {Button, Dialog, DialogContent, Divider, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../redux/orders/order-action-creators";

const AddFundsDialog = ({open, handleClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            gridContainer: {
                marginBottom: 32
            },
            title: {
                textTransform: 'uppercase'
            },
            card: {
                [theme.breakpoints.up('md')]: {
                    height: 460
                },
            },
            textField: {
                marginTop: 8,
                marginBottom: 8
            },
            button: {
                marginTop: 8,
                marginBottom: 8,
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: theme.palette.primary.main
            }
        }
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [e, setError] = useState({});
    const [hasError, setHasError] = useState(false);

    const {token} = useSelector(state => state.auth);

    const handleAddressChange = event => {
        setAddress(event.target.value);
    }

    const handleAmountChange = event => {
        setAmount(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(!address){
            setHasError(true);
            setError({...e, address: 'Field required'})
        }

        if(!amount){
            setHasError(true);
            setError({...e, amount: 'Field required'})
        }

        if(hasError){
            return;
        }else {
            dispatch(createOrder(token, {address, amount}, handleClose));
        }
    }

    const handleCloseClick = () => {
        handleClose();
    }


    return (
        <Dialog open={open} onClose={handleCloseClick}>
            <DialogContent>
                <Typography className={classes.title} gutterBottom={true} variant="h5">
                    ADDING FUNDS
                </Typography>
                <Typography gutterBottom={true} variant="body2">
                    Make a transaction to the purse below. Your money will be received within 5 minutes till 24 hours,
                    your
                    balance will be updated and display after clicking on refresh due to bitcoin network overload.
                </Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <form onSubmit={handleSubmit}>
                    <Typography className={classes.subtitle} gutterBottom={true} variant="h5">
                        Our Address
                    </Typography>
                    <Typography gutterBottom={true} variant="body2">
                        3E792v1meHHpFj2HvcM5pGdNFiafjAWjQZ
                    </Typography>

                    <Typography gutterBottom={true} variant="body2">
                        Enter Amount sent and BTC address in the space provided below!!
                    </Typography>

                    <TextField
                        variant="outlined"
                        label="Address"
                        placeholder="Enter address"
                        margin="normal"
                        className={classes.textField}
                        value={address}
                        type="text"
                        onChange={handleAddressChange}
                        name="address"
                        fullWidth={true}
                        required={true}
                        helperText={e.address}
                        error={Boolean(e.address)}
                    />

                    <TextField
                        variant="outlined"
                        label="Amount (USD)"
                        placeholder="Enter amount in dollars"
                        margin="normal"
                        className={classes.textField}
                        value={amount}
                        type="number"
                        onChange={handleAmountChange}
                        name="amount"
                        fullWidth={true}
                        required={true}
                        helperText={e.amount}
                        error={Boolean(e.amount)}
                    />

                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth={true}
                        className={classes.button}
                        variant="outlined"
                        size="small">
                        Send
                    </Button>
                </form>
                <Divider variant="fullWidth" className={classes.divider}/>

                <Typography className={classes.title} gutterBottom={true} variant="h5">
                    FUNDS APPROVAL IN PROGRESS
                </Typography>
                <Typography gutterBottom={true} variant="body2">
                    Please have patience for our 2 confirmations.
                </Typography>

                <Button
                    onClick={handleCloseClick}
                    variant="outlined"
                    size="small">
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    )
}


export default AddFundsDialog;
