import { questions } from "@/data/questions";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function QuestionScreen() {
  const { index, score } = useLocalSearchParams<{
    index: string;
    score: string;
  }>();
  const current = Number(index);
  const question = questions[current];

  function answer(optionIndex: number) {
    const points = Number(score);
    const newScore = optionIndex === question.answer ? points + 1 : points;
    const next = current + 1;

    if (next < questions.length) {
      router.replace({
        pathname: "/question/[index]",
        params: { index: next, score: newScore },
      });
      console.log("score", newScore);
    } else {
      router.replace({ pathname: "/result", params: { score: newScore } });
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.question}>{question.text}</Text>
      {question.options.map((option, optionIndex) => (
        <Pressable
          key={option}
          style={styles.option}
          onPress={() => answer(optionIndex)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, gap: 12 },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2933",
    marginBottom: 12,
  },
  option: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#F1E4D6",
    borderRadius: 14,
    padding: 16,
  },
  optionText: { fontSize: 17, color: "#0B3D6E" },
});
