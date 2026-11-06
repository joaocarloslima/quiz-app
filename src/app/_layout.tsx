import { questions } from "@/data/questions";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0B3D6E" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#FFF8F0" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Quiz do curso" }} />
      <Stack.Screen
        name="question/[index]"
        options={{
          title: `Pergunta de ${questions.length}`,
        }}
      />
    </Stack>
  );
}
