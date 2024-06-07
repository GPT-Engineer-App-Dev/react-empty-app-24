import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events</Text>;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl">Upcoming Events</Heading>
      </Box>
      <VStack spacing={4}>
        {events.map(event => (
          <Box key={event.id} p={4} borderWidth={1} borderRadius="lg" width="100%">
            <Text fontSize="xl" fontWeight="bold">{event.name}</Text>
            <Text>{new Date(event.date).toLocaleDateString()}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Events;