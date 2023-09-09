'use client'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"
import { AiOutlineFileWord } from 'react-icons/ai'
import { BiRecycle } from "react-icons/bi"
import { GiWorld } from "react-icons/gi"
import './styles.css'

const SearchOverlay = () => {
    const [age, setAge] = useState('');
    const handleAgeSubmit = (e) => {
        e.preventDefault();
        setAge(e.target.value);
    }
  return (
    <Box>
        <form>
            <Box className="searchova">
                <Box>
                    <Box className="searchova-wrapper">
                        <Box>
                            <Typography variant="h4">Filter</Typography>
                        </Box>
                        <Box>
                            <BiRecycle className="searchova-icon"/>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Box>
                                <AiOutlineFileWord />
                                <Typography variant='h5'>Keyword</Typography>
                            </Box>
                            <Box>
                                <input type="text" placeholder="Search"/>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <GiWorld />
                                <Typography variant='h5'>Location type</Typography>
                            </Box>
                            <Box>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Onsite" />
                                <FormControlLabel control={<Checkbox />} label="Hybrid" />
                                <FormControlLabel control={<Checkbox />} label="Remote" />
                            </FormGroup>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <GiWorld />
                                <Typography variant='h5'>Location</Typography>
                            </Box>
                            <Box>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleAgeSubmit}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <GiWorld />
                                <Typography variant='h5'>Industry</Typography>
                            </Box>
                            <Box>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Consumer" />
                                <FormControlLabel control={<Checkbox />} label="IT" />
                                <FormControlLabel control={<Checkbox />} label="Hospitality" />
                                <FormControlLabel control={<Checkbox />} label="NGO" />
                                <FormControlLabel control={<Checkbox />} label="Health Care" />
                                <FormControlLabel control={<Checkbox />} label="Construction" />
                                <FormControlLabel control={<Checkbox />} label="Transport" />
                                <FormControlLabel control={<Checkbox />} label="Other" />
                            </FormGroup>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <GiWorld />
                                <Typography variant='h5'>Job Type</Typography>
                            </Box>
                            <Box>
                                <FormControlLabel control={<Checkbox />} label="Permanent" />
                                <FormControlLabel control={<Checkbox />} label="Temporary" />
                                <FormControlLabel control={<Checkbox />} label="Contract" />
                                <FormControlLabel control={<Checkbox />} label="Internship" />
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <GiWorld />
                                <Typography variant='h5'>Job Engagement</Typography>
                            </Box>
                            <Box>
                                <FormControlLabel control={<Checkbox />} label="Full Time" />
                                <FormControlLabel control={<Checkbox />} label="Part Time" />
                                
                            </Box>
                        </Box>

                    </Box>
                </Box>
                <Box>
                    <Button variant="contained">
                        Show Results
                    </Button>
                </Box>
            </Box>
        </form>
    </Box>
  )
}

export default SearchOverlay