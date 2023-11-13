import { Box, Button } from "@mui/material";

import Wrapper from 'shared/Wrapper';

const Auth = () => {
  return (
    <Wrapper title="Auth">
      <Box display="grid" gap="10px">
        <Button
          variant="contained"
          color="primary"
          onClick={() => localStorage.setItem("token", "token")}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => localStorage.setItem("token", "")}
        >
          Logout
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Auth;
