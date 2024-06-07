import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx"; // Import the useSupabaseAuth hook
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth(); // Get session and logout function

  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          MyWebsite
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
      {session ? (
          <Button onClick={logout} color="white" mx={2} variant="link">
            Logout
          </Button>
        ) : (
          <Link as={RouterLink} to="/login" color="white" mx={2}>
            Login
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;