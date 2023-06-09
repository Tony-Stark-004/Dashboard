import { Box } from "@mui/system"
import Header from '../../components/Header'
import BarChart from '../../components/Barchart'

const Bar = () => {
    return (
        <Box m='20px'>
            <Header title='Bar Chart' subtitle='Simple bar chart'/>
            <Box height='75vh'>
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar