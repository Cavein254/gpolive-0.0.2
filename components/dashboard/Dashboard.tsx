import { Box, Card, Typography } from "@mui/material"
import { AiFillFilter } from "react-icons/ai"
import Job from "./job/Job"
import './styles.css'

const Dashboard = () => {
  return (
    <>
    <Box>
      <Box className="job-header">
        <Box className="dashboard-text">
          <Typography variant='h1' sx={{
            fontFamily:'Raleway',
            fontWeight:'900',
            fontSize:'2rem'
          }}>
            Browse Available Jobs
          </Typography>
          <Typography variant='h5' sx={{
            fontFamily:'Raleway',
            fontWeight:'300',
            fontSize:'1.4rem'
          }}>
            Search the various jobs that our site has to offer.
          </Typography>
        </Box>
        <Box className="dashboard-category">
          <Card className="dashboard-remote">
            <Typography variant='h1'>Remote Jobs</Typography>
            <Typography variant='h5'>100 Jobs</Typography>
          </Card>
          <Card className="dashboard-hybrid">
            <Typography variant='h1'>Hybrid Jobs</Typography>
            <Typography variant='h5'>120 Jobs</Typography>
          </Card>
          <Card className="dashboard-site">
            <Typography variant='h1'>onsite Jobs</Typography>
            <Typography variant='h5'>50 Jobs</Typography>
          </Card>
        </Box>
        <Box>
          <Box className="job-filter-item">
            <Box >
              <Typography variant='h4'>JOBS</Typography>
            </Box>
            <Box>
              <AiFillFilter />
              <Typography variant="h6">Filter By</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6">78 Jobs Found</Typography>
          </Box>
        </Box>
      </Box>
      <Job />
    </Box>
    </>
  )
}

export default Dashboard