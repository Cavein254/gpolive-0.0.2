import { Box, Typography } from "@mui/material"
import { AiFillFilter } from "react-icons/ai"
import Job from "./job/Job"

const Dashboard = () => {
  return (
    <>
    <Box>
      <Box className="job-header">
        <Box>
          <Typography variant='h1'>
            Browse Available Jobs
          </Typography>
          <Typography variant='h5'>
            Search the various jobs that our site has to offer.
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography variant='h1'>Remote Jobs</Typography>
            <Typography variant='h5'>100 Jobs</Typography>
          </Box>
          <Box>
            <Typography variant='h1'>Hybrid Jobs</Typography>
            <Typography variant='h5'>120 Jobs</Typography>
          </Box>
          <Box>
            <Typography variant='h1'>onsite Jobs</Typography>
            <Typography variant='h5'>50 Jobs</Typography>
          </Box>
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