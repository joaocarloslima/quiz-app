import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Quiz do Curso 🧠</Text>
      <Text style={styles.subtitle}>5 perguntas sobre React Native</Text>
      <Link
        href={{
          pathname: "/question/[index]",
          params: { index: "0", score: 0 },
        }}
        asChild
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, justifyContent: "center", gap: 16 },
  title: { fontSize: 32, fontWeight: "bold", color: "#0B3D6E" },
  subtitle: { fontSize: 17, color: "#6B7280" },
  button: {
    backgroundColor: "#F28C28",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
