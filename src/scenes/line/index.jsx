import { Box } from "@mui/system"
import Header from '../../components/Header'
import LineChart from '../../components/Linechart'

const Line = () => {
    return (
        <Box m='20px'>
            <Header title='Line Chart' subtitle='Simple Line Chart'/>
            <Box height='75vh'>
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line