import { router, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { questions } from "../data/questions";

export default function ResultScreen() {
  const { score } = useLocalSearchParams<{ score: string }>();
  const points = Number(score);
  const emoji = points === questions.length ? "🏆" : points >= 3 ? "👏" : "📚";

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: "Resultado" }} />
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.score}>
        Você acertou {points} de {questions.length}
      </Text>
      <Pressable style={styles.button} onPress={() => router.dismissAll()}>
        <Text style={styles.buttonText}>Jogar de novo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  emoji: { fontSize: 72 },
  score: { fontSize: 28, fontWeight: "bold", color: "#0B3D6E" },
  button: {
    backgroundColor: "#F28C28",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 16,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
