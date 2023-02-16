import React from 'react';

import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import { Avatar, Box, List, ListItemAvatar, ListItemText, ListSubheader, ListItem, Typography } from '@mui/material';
import { boxStyle, cardHeaderStyle, avatarStyle, userStyle, infoStyle, iconStyle, expertStyle } from './ExpertsStyles';


export default function Experts() {
    return (
        <Box style={boxStyle}>
            <List
                subheader={
                    <ListSubheader component="div" >
                        <Typography variant="h5" fontWeight="bold" style={cardHeaderStyle}>
                            Top Experts
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src="./avatar.png" style={avatarStyle}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography fontWeight="bold" style={userStyle}>
                                Pseudo Near Expert
                            </Typography>
                        }
                        secondary={
                            <Typography style={infoStyle}>
                                47
                                    <NorthOutlinedIcon style={iconStyle} />
                                collected
                            </Typography>
                        }
                        style={expertStyle}
                    >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src="./avatar.png" style={avatarStyle}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography fontWeight="bold" style={userStyle}>
                                Near Expert
                            </Typography>
                        }
                        secondary={
                            <Typography style={infoStyle}>
                                47
                                    <NorthOutlinedIcon style={iconStyle} />
                                collected
                            </Typography>
                        }
                        style={expertStyle}
                    >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src="./avatar.png" style={avatarStyle}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography fontWeight="bold" style={userStyle}>
                                Bitcoin Maxi
                            </Typography>
                        }
                        secondary={
                            <Typography style={infoStyle}>
                                47
                                    <NorthOutlinedIcon style={iconStyle} />
                                collected
                            </Typography>
                        }
                        style={expertStyle}
                    >
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src="./avatar.png" style={avatarStyle}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography fontWeight="bold" style={userStyle}>
                                Ethereum Maxi
                            </Typography>
                        }
                        secondary={
                            <Typography style={infoStyle}>
                                47
                                    <NorthOutlinedIcon style={iconStyle} />
                                collected
                            </Typography>
                        }
                        style={expertStyle}
                    >
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );
}