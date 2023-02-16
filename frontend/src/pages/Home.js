import React from 'react';

import Header from '../components/Header/Header';
import Branding from '../components/Branding/Branding';
import About from '../components/About/About';
import Experts from '../components/Experts/Experts';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import Questions from '../components/Questions/Questions';

import { Box, Container, Grid, Snackbar } from '@mui/material';
import { containerStyle } from './HomeStyles';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFail, setOpenFail] = React.useState(false);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenFail(false);
  };

  return (
    <Box>
      <Header handleOpenModal={handleOpenModal} />
      
      <Container maxWidth="lg">
        <Grid style={containerStyle}>
          <Grid item xs={12} style={containerStyle}>
            <Branding />
          </Grid>

          <Grid container item xs={12} spacing={2} justifyContent="flex-end">
              <Grid item xs={12} md={8}>
                { isModalOpen === true &&
                  <QuestionForm handleCloseModal={handleCloseModal} setOpenSuccess={setOpenSuccess} setOpenFail={setOpenFail} />
                }
                  <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose} message="Question submitted successfully!" />
                  <Snackbar open={openFail} autoHideDuration={5000} onClose={handleClose} message="Question submission failed. Please try again later." />
                { isModalOpen === false &&
                  <Questions />
                }
              </Grid>

              <Grid container item xs={12} md={4} spacing={2}>
                <Grid item xs={12}>
                  <About />
                </Grid>

                <Grid item xs={12}>
                  <Experts />
                </Grid>
              </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
