"use client";

import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Review project proposal", completed: false },
    { id: 2, title: "Prepare presentation slides", completed: true },
    { id: 3, title: "Send follow-up emails", completed: false },
    { id: 4, title: "Update website content", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-2">
            <Checkbox
              id={`task-${task.id}`}
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`flex-1 text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.title}
            </label>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-4">Add New Task</Button>
    </div>
  );
}
