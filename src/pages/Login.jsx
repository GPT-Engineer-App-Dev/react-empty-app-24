import { Container, Box } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" maxW="md" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;