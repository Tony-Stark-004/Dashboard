import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An important question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Another important question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate?
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Your Favourite question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ea! Quo voluptatem odio dolor.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                   Some Randon question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero praesentium quaerat cupiditate, a debitis modi id!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    A Final Question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laboriosam facere nostrum eos pariatur laborum, magni amet placeat eius accusamus.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ