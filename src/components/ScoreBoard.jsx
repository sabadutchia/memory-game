import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomNumber } from "../helpers/common.helper";
import { addUser, resetUser } from "../redux/userSlice";

export default function ScoreBoard({ score, bestScore }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${getRandomNumber()}`)
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)));
    return () => resetUser();
  }, []);

  return (
    <div className="score-container">
      <p>
        <strong>User:</strong> {user.name}
      </p>
      <div className="score-board">
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
