import { useDispatch, useSelector } from "react-redux";
import Task from './task'
import { SetFilter } from "../JS/Actions/actions";

function ListTask() {
  const tasks = useSelector((store) => store.tasks);
  const filter = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  const filteredTask = tasks.filter((task) => {
    switch (filter) {
      case "done":
        return task.isDone;
      case "notdone":
        return !task.isDone;
      default:
        return true;
    }
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(SetFilter("all"))}>ALL</button>
        <button onClick={() => dispatch(SetFilter("done"))}>Done</button>
        <button onClick={() => dispatch(SetFilter("notDone"))}>Not done</button>
      </div>
      <div>
        {filteredTask.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default ListTask;
