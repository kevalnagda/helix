import React from 'react';

import { Box, List, ListItemIcon, ListSubheader, Typography, ListItem } from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import TokenRoundedIcon from '@mui/icons-material/TokenRounded';

import { boxStyle, cardHeaderStyle, cardItemStyle, iconStyle, infoStyle } from './AboutStyles.js';


export default function About() {
    return (
        <Box style={boxStyle}>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div">
                        <Typography variant="h5" fontWeight='bold' fontFamily='Poppins' style={cardHeaderStyle}>
                            About
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItem style={cardItemStyle}>
                    <ListItemIcon style={iconStyle}>
                        <GroupsOutlinedIcon />
                    </ListItemIcon>
                    <Typography style={infoStyle}>
                        246 Experts
                    </Typography>
                </ListItem>
                <ListItem style={cardItemStyle}>
                    <ListItemIcon style={iconStyle}>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    <Typography style={infoStyle}>
                        100k Questions and Answers
                    </Typography>
                </ListItem>
                <ListItem style={cardItemStyle}>
                    <ListItemIcon style={iconStyle}>
                        <NorthOutlinedIcon />
                    </ListItemIcon>
                    <Typography style={infoStyle}>
                        50k Upvotes
                    </Typography>
                </ListItem>
                <ListItem style={cardItemStyle}>
                    <ListItemIcon style={iconStyle}>
                        <TokenRoundedIcon />
                    </ListItemIcon>
                    <Typography style={infoStyle}>
                        145 Tokens Awarded
                    </Typography>
                </ListItem>
            </List>
        </Box>
    );
}