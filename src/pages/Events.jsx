import { Container, Text, VStack } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events</Text>;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {events.map(event => (
          <Text key={event.id}>{event.name}</Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Events;