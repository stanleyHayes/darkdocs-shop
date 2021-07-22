import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {requestCheque} from "../../redux/cheques/cheques-action-creators";

const RequestChequeDialog = ({open, handleClose}) => {

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
            },
            closeButton: {
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: theme.palette.primary.light
            },
            subtitle: {
                color: theme.palette.text.primary
            },
            caption: {
                fontWeight: 'bold',
                textTransform: 'uppercase'
            },
            value: {}
        }
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const [cheque, setCheque] = useState({balance: 'NONE', price: '0'});
    const [e, setError] = useState({});
    const [hasError, setHasError] = useState(false);

    const {token} = useSelector(state => state.auth);

    const handleChange = event => {
        setCheque(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!cheque.address) {
            setHasError(true);
            setError({...e, address: 'Field required'})
        }

        if (!cheque.balance) {
            setHasError(true);
            setError({...e, amount: 'Field required'})
        }

        if (hasError) {
            return;
        } else {
            dispatch(requestCheque(cheque, token));
        }
    }

    const handleCloseClick = () => {
        handleClose();
    }

    const getPrice = balance => {
        switch (balance) {
            case '$1k - $5k':
                setCheque({...cheque, price: '10', balance});
                break;
            case '$5k - $10k':
                setCheque({...cheque, price: '15', balance});
                break;
            case '$11k - $50k':
                setCheque({...cheque, price: '20', balance});
                break;
            case '$50k - $100k':
                setCheque({...cheque, price: '25', balance});
                break;
            case '$100k - $1M':
                setCheque({...cheque, price: '30', balance});
                break;
            default:
                setCheque({...cheque, price: '10', balance});
        }
    }

    const handleBalanceChange = event => {
        getPrice(event.target.value);
    }

    return (
        <Dialog open={open} onClose={handleCloseClick}>
            <DialogContent>
                <Typography className={classes.title} gutterBottom={true} variant="h5">
                    Request Cheque
                </Typography>

                <form onSubmit={handleSubmit}>

                    <TextField
                        variant="outlined"
                        label="Address"
                        placeholder="Enter address"
                        margin="normal"
                        className={classes.textField}
                        value={cheque.address}
                        type="text"
                        onChange={handleChange}
                        name="address"
                        fullWidth={true}
                        required={true}
                        helperText={e.address}
                        error={Boolean(e.address)}
                    />

                    <Typography variant="caption" className={classes.caption}>
                        Balance
                    </Typography>
                    <Select
                        fullWidth={true}
                        margin="none"
                        className={classes.textField}
                        onChange={handleBalanceChange}
                        variant="outlined"
                        name="balance"
                        value={cheque.balance}>
                        <MenuItem value="NONE">Select Balance</MenuItem>
                        <MenuItem value="$1k - $5k">$1k - $5k</MenuItem>
                        <MenuItem value="$5k - $10k">$5k - $10k</MenuItem>
                        <MenuItem value="$11k - $50k">$11k - $50k</MenuItem>
                        <MenuItem value="$50k - $100k">$50k - $100k</MenuItem>
                        <MenuItem value="$100k - $1M">$100k - $1M</MenuItem>
                    </Select>

                    <Typography gutterBottom={true} variant="caption" className={classes.caption}>
                        Price
                    </Typography>

                    <Typography gutterBottom={true} variant="body2" className={classes.value}>
                        ${parseFloat(cheque.price).toFixed(2)}
                    </Typography>

                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth={true}
                        className={classes.button}
                        variant="outlined"
                        size="small">
                        Request
                    </Button>
                </form>
            </DialogContent>
            <Divider variant="fullWidth" className={classes.divider}/>
            <DialogActions>
                <Button
                    className={classes.closeButton}
                    onClick={handleCloseClick}
                    variant="outlined"
                    size="small">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}


export default RequestChequeDialog;
