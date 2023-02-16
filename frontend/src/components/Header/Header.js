import React from 'react';

import { appbarStyle, buttonStyle, toolbarStyle } from './HeaderStyles';
import { AppBar, Toolbar, Button, Container } from '@mui/material';


export default function Header(props) {
    return (
        <AppBar position="relative" elevation={0} style={appbarStyle}>
            <Container>
                <Toolbar style={toolbarStyle}>
                    <Button color="inherit" onClick={() => props.handleOpenModal()} style={buttonStyle}>
                        Ask a question
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}