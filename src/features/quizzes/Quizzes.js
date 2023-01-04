import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { quizzesSelector } from "../quizzes/quizzesSlice";
import { topicsSelector } from "../topics/topicsSlice";

export default function Quizzes() {
  const quizzes = useSelector(quizzesSelector); // replace this with a call to your selector to get all the quizzes in state
  // const quizzes = useSelector(topicsSelector); // replace this with a call to your selector to get all the quizzes in state
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}

////// This should be showing the Quizzes in the list////////////////
