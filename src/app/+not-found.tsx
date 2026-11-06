import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: "Ops!" }} />
      <Text style={styles.emoji}>🧭</Text>
      <Text style={styles.text}>Esta tela não existe.</Text>
      <Link href="/" style={styles.link}>
        Voltar para o início
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center", gap: 12 },
  emoji: { fontSize: 64 },
  text: { fontSize: 20, color: "#1F2933" },
  link: { fontSize: 18, color: "#F28C28", fontWeight: "bold" },
});
