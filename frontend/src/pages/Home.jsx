import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/task");
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <div className="">
        {tasks &&
          tasks.map((task) => (
            <div key={task.id} className=" ">
              <div className="" />
              <p>{task.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
