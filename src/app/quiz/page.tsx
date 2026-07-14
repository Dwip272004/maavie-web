import { QuizEngine } from "@/components/quiz/QuizEngine";

export default function QuizPage() {
  return (
    <div
      className="flex min-h-screen justify-center"
      style={{ background: "linear-gradient(180deg,#FBF8F4 0%, #F6F2ED 100%)" }}
    >
      <QuizEngine />
    </div>
  );
}
