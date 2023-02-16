import React from 'react';

import { boxStyle, listItemStyle, cardStyle, cardHeaderStyle, dividerStyle, ownerStyle, avatarStyle, ownerInfoStyle } from './QuestionsStyles';
import { Box, List, Grid, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';


export default function Questions() {
    return (
        <Box style={boxStyle}>
            <List component="nav">
                <ListItem style={listItemStyle}>
                    <Grid style={cardStyle}>
                        <Grid item>
                            <Typography fontWeight="bold" style={cardHeaderStyle}>
                                MongoDB how to search by using regex but avoiding case sensitive?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={cardHeaderStyle}>
                                It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance 
                                token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..
                            </Typography>
                        </Grid>
                        <Grid item style={dividerStyle}>
                            <Divider />
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} style={ownerStyle}>
                                <Typography style={cardHeaderStyle} fontWeight="bold">
                                    Asked by:
                                </Typography>
                            </Grid>
                            <ListItemAvatar style={ownerStyle}>
                                <Avatar alt="Avatar" src="./avatar.png"style={avatarStyle} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography fontWeight="bold" style={ownerStyle}>
                                        Pseudo Near Expert
                                    </Typography>
                                }
                                secondary={
                                    <Typography style={ownerInfoStyle}>
                                        2 Answers. 1 Question
                                    </Typography>
                                }
                            />
                        </Grid>
                    </Grid>
                </ListItem>

                <ListItem style={listItemStyle}>
                    <Grid style={cardStyle}>
                        <Grid item>
                            <Typography fontWeight="bold" style={cardHeaderStyle}>
                                MongoDB how to search by using regex but avoiding case sensitive?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={cardHeaderStyle}>
                                It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance 
                                token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..
                            </Typography>
                        </Grid>
                        <Grid item style={dividerStyle}>
                            <Divider />
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12} style={ownerStyle}>
                                <Typography style={cardHeaderStyle} fontWeight="bold">
                                    Asked by:
                                </Typography>
                            </Grid>
                            <ListItemAvatar style={ownerStyle}>
                                <Avatar alt="Avatar" src="./avatar.png"style={avatarStyle} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography fontWeight="bold" style={ownerStyle}>
                                        Pseudo Near Expert
                                    </Typography>
                                }
                                secondary={
                                    <Typography style={ownerInfoStyle}>
                                        2 Answers. 1 Question
                                    </Typography>
                                }
                            />
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Box>
    );
}