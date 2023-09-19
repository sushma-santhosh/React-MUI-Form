import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DoneIcon from '@mui/icons-material/Done';
import Date from './Date';

const Body = () => {
    return (
        <Box sx={{  display: 'block',
        p: 2,
        m: 2, }}
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Box
                        sx={{
                            pb:1,
                            mb:1,
                            width: 250,
                            height: 250,
                            backgroundColor: 'grey',
                        }}
                    />
                    <Button variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload
                    </Button>
                </Grid>
                <Grid xs>
                <Grid xs>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item style={{ display: "flex", justifyContent: "flex-start" }}>
                            <Typography variant="h5">
                                Account Setting
                            </Typography>
                        </Grid>
                        <Grid item> <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            placeholder='email@yourcompany.com'
                        /></Grid>


                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                                required
                                id="outlined-required"
                                label="Username"
                                defaultValue=""
                                placeholder='Username'
                            /></Grid>

                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                                required
                                id="outlined-required"
                                label="Password"
                                defaultValue=""
                                placeholder='Password'
                            /></Grid>

                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                                required
                                id="outlined-required"
                                label="Confirm Password"
                                defaultValue=""
                                placeholder='Confirm Password'
                            /></Grid>
                    </Grid>
                </Grid>
                <Grid xs>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item style={{ paddingTop:'2rem',marginTop:'2rem',display: "flex", justifyContent: "flex-start" }}>
                            <Typography variant="h5">
                                Profile Setting
                            </Typography>
                        </Grid>
                        <Grid item> <TextField
                        sx={{ ml: '10rem', width: '50ch' }} 
                            required
                            id="firstname"
                            label="FirstName"
                            defaultValue=""
                            placeholder='FirstName'
                        /></Grid>


                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                                required
                                id="lastname"
                                label="LastName"
                                defaultValue=""
                                placeholder='LastName'
                            /></Grid>
                        <Grid item>
                            <FormControl sx={{ ml: '10rem', width: '50ch' }} >
                                <FormLabel id="gender">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup></FormControl>
                        </Grid>
                        <Grid item sx={{ ml: '10rem', width: '50ch' }}>
                            {/* <TextField
                            sx={{ ml: '10rem', width: '50ch' }} 
                                required
                                id="dob"
                                label="Birthday"
                                defaultValue=""
                                placeholder='Birthday'
                            /> */}
                            <Date/>
                            </Grid>
                           

                        <Grid item>
                        <TextField
                        sx={{ ml: '10rem', width: '50ch' }}
          id="about"
          label="About"
          multiline
          rows={4}
        /></Grid>
                    </Grid>
                </Grid>
                <Grid xs>
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item style={{ paddingTop:'2rem',marginTop:'2rem', display: "flex", justifyContent: "flex-start" }}>
                            <Typography variant="h5">
                                Contact Setting
                            </Typography>
                        </Grid>
                        <Grid item> <TextField
                        sx={{ ml: '10rem', width: '50ch' }}
                            required
                            id="mobilephone"
                            label="Mobile Phone"
                            defaultValue=""
                            placeholder='Mobile Phone'
                        /></Grid>


                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }}
                                required
                                id="website"
                                label="Website"
                                defaultValue=""
                                placeholder='Website'
                            /></Grid>

                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }}
                                id="facebook"
                                label="Facebook"
                                defaultValue=""
                                placeholder='Facebook'
                            /></Grid>

                        <Grid item>
                            <TextField
                            sx={{ ml: '10rem', width: '50ch' }}
                                id="twitter"
                                label="Twitter"
                                defaultValue=""
                                placeholder='Twitter'
                            /></Grid>
                    </Grid>
                </Grid>
                <Grid xs>
                <Grid item>
                <Button variant="contained" startIcon={<DoneIcon />}>
                        Finish
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Body;