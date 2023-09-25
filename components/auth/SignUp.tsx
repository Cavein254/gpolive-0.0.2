'use client';

import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './styles.css';

const SignUp = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const quote = fetch("https://zenquotes.io/api/random")
                  .then(res => res.json())
                  .then(data => setQuote(data))
    console.log({quote})
  },[])
  console.log("here comes the session")
  const {data: session} = useSession();
  console.log({session})
  console.log(session?.user?.image)
  return (
    <Box className="auth">
      <Box
        className="auth-container"
        sx={{
          boxShadow: { sm: 2, md: 2 },
          borderRadius: { sm: '15px' },
          backgroundColor: '#fff',
        }}
      >
        <Box className="auth-img-container">
          <Image
            width={300}
            height={400}
            priority={true}
            alt="login"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=700&q=80"
            className="auth-img"
          />
        </Box>
        <Box className="auth-main">
          <Box className="auth-text">
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Lato',
                fontWeight: 900,
                fontSize: '1.8rem',
              }}
            >
              Welcome on Board
            </Typography>
          </Box>
          <form>
             {session ? 
             (
              <Box>
                <Box className="container-user-img">
                <Image
                  width={150}
                  height={150}
                  priority={true}
                  alt="user image"
                  src={session.user.image}
                  className="user-img"
                />
                </Box>
                <Box className="container-user-text">
                  <Typography variant='h4'>Welcome {session.user.name}!</Typography>
                </Box>
              
            </Box>
             ): " "
             }
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;