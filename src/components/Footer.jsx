import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer(){
    return(
        <div>
             <Typography variant="body2" color="white" align="center">
        <Link color='inherit' href="https://www.linkedin.com/in/kevin-knight-b39ba8188/">
            My LinkedIn <LinkedInIcon />
        </Link>{' '}
        <Link color="inherit" href="https://github.com/tgodkev">
          My GitHub <GitHubIcon />
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
        </div>
    )
}

export default Footer;