import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {createTheme} from "@material-ui/core";
import {Provider} from "react-redux";
import store from "./redux/store";


const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, IBM Plex Mono, sans-serif;'
    },
    palette: {
        primary: {
            main: '#374151',
            light: '#6B7280',
            dark: '#1F2937'
        },
        secondary: {
            main: '#DC2626'
        },
        text: {
            primary: '#E5E7EB',
            secondary: '#374151',
            disabled: '#9CA3AF'
        },
        action: {
            active: '#E5E7EB'
        },
        background: {
            default: '#111827',
            paper: '#1F2937'
        },
        type: 'dark'
    },
    shape: {
        borderRadius: 8
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
