import { Box } from "@mui/system"
import Header from '../../components/Header'
import PieChart from '../../components/Piechart'

const Pie = () => {
    return (
        <Box m='20px'>
            <Header title='Pie Chart' subtitle='Simple Pie chart'/>
            <Box height='75vh'>
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie