import { Box, Button, Card, Typography } from "@mui/material"
import { GiAbstract034 } from "react-icons/gi"
import './styles.css'

const Job = () => {
  return (
    <Card className="job-main-card">
      <Box className="job-whole-wrapper">
     <Box className='job-card-wrapper'>
      <Box className='job-card-items'>
        <Box>
          <GiAbstract034  className='job-icon'/>
        </Box>
        <Box>
          <Typography variant="h4">DevOps Engineer</Typography>
          <Typography variant="h6">Onsite</Typography>
        </Box>
      </Box>
      <Box>
        <Button variant="contained">
          Apply 
        </Button>
      </Box>
     </Box>
     <Box className="job-details">
        <Box>Full Time</Box>
        <Box>3-8 years</Box>
        <Box>Ksh 120,000</Box>
     </Box>
     <Box>
        <Box>
          <p>
            Flexible working hours
          </p>
          <p>
             Great Medical Insurance
          </p>
          <p>
            Amaizing working culture
          </p>
        </Box>
     </Box>
     </Box>
    </Card>
  )
}

export default Job