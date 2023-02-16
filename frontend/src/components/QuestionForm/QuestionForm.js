import axios from 'axios';
import React from 'react';

import {
    boxStyle,
    headerBoxStyle,
    headerStyle,
    closeButtonStyle,
    titleInputStyle,
    questionInputStyle,
    optionInputStyle,
    fontButtonStyle,
    postButtonStyle,
    iconStyle
} from './QuestionFormStyles';

import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Grid, Divider, Typography, Button, TextField, IconButton } from '@mui/material';


export default function QuestionForm(props) {
    const [title, setTitle] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [isTitleEmpty, setIsTitleEmpty] = React.useState(false);
    const [isQuestionEmpty, setIsQuestionEmpty] = React.useState(false);

    const handleTitleChange = (event) => {
        setIsTitleEmpty(false);
        setTitle(event.target.value);
    }
    const handleQuestionChange = (event) => {
        setIsQuestionEmpty(false);
        setQuestion(event.target.value);
    }
    
    const handleFormSubmit = () => {
        if (title !== '' && title !== null && title !== undefined &&
            question !== '' && question !== null && question !== undefined
        ) {
            axios
                .post('http://localhost:8000/api/questions/', {'title': title, 'description': question})
                .then((response) => {
                    props.setOpenSuccess(true);
                    props.handleCloseModal();
                })
                .catch((error) => {
                    console.log(error);
                    props.setOpenFail(true);
                });
        }
        if (title === '' || title === null || title === undefined) {
            setIsTitleEmpty(true);
        }
        if (question === '' || question === null || question === undefined) {
            setIsQuestionEmpty(true);
        }
    };

    return (
        <Grid style={boxStyle}>
            <Grid container style={headerBoxStyle}>
                <Grid item xs={11}>
                    <Typography variant="h5" fontWeight="bold" style={headerStyle}>
                        New Question
                    </Typography>
                </Grid>
                <Grid container item justifyContent="flex-end" xs={1}>
                    <IconButton onClick={() => props.handleCloseModal()} style={iconStyle}>
                        <HighlightOffOutlinedIcon fontSize="large" style={closeButtonStyle}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item style={headerBoxStyle}>
                <Divider />
            </Grid>
            <Grid item border={1} style={titleInputStyle}>
                <TextField
                    fullWidth
                    required
                    variant="standard"
                    label="Enter the question title"
                    value={title}
                    onChange={handleTitleChange}
                    error={isTitleEmpty}
                    InputProps={{disableUnderline: true}}
                />
            </Grid>
            <Grid item style={headerBoxStyle}/>
            <Grid item border={1} style={questionInputStyle}>
                <Grid item sx={{paddingLeft: 2}}>
                    <TextField
                        fullWidth
                        required
                        multiline
                        rows={12}
                        variant="standard" 
                        label="Write your question here"
                        value={question}
                        onChange={handleQuestionChange}
                        error={isQuestionEmpty}
                        InputProps={{disableUnderline: true}}
                    />
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid container columnSpacing={6} style={optionInputStyle}>
                    <Grid item xs={4}>
                        <IconButton style={fontButtonStyle}>
                            Aa
                        </IconButton>
                        <IconButton>
                            <CollectionsOutlinedIcon />
                        </IconButton>
                    </Grid>
                    <Grid container item xs={8} justifyContent="flex-end">
                        <Button
                            size="small"
                            color="inherit"
                            onClick={() => handleFormSubmit()}
                            style={postButtonStyle}
                        >
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}