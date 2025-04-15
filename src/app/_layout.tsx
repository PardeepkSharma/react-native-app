import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Index"
        options={{
          headerTitle: "Index Page",
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />
      <Stack.Screen
        name="About"
        options={{
          headerTitle: "About Page",
          headerStyle: {
            backgroundColor: "teal",
          },
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          headerTitle: "Custom User Title",
          headerShown: true,
          animation: "fade",
          headerStyle: {
            backgroundColor: "yellow",
          },
        }}
      />
    </Stack>
  );
};
export default RootLayout;
