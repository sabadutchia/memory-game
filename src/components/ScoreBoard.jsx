import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

export default function ScoreBoard({ score, bestScore }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)));
  }, []);

  return (
    <div className="score-board">
      <div>
        <p>
          <strong>User:</strong> {user.name}
        </p>
      </div>
      <div>
        <p>
          <strong>Score: </strong>
          {score}
        </p>
        <p>
          <strong>Best score: </strong>
          {bestScore}
        </p>
      </div>
    </div>
  );
}
