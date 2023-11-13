import Typography from '@mui/material/Typography';
import Wrapper from 'shared/Wrapper';

const  Home = ()=> {

  return (
    <Wrapper title="Home">
        <Typography variant='h1'>
           Medihome
        </Typography>
        <Typography variant='h3' sx={{color: 'grey'}}>
           Your medical helper
        </Typography>
    </Wrapper>
  );
}

export default Home;