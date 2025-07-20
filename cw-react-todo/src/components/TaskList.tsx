import Task from "./Task.tsx";
import {Component} from "react";
export type TaskType = {
    text: string;
    id: number;
}


type State = {
    tasks: TaskType[]
}

class TaskList extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            tasks: ["Task1", "Task2", "Drink Beer"]
        }
    }

//================Добавление новых Tasks================
    addTask = (text: string) => {
        const temp = [...this.state.tasks];
        temp.unshift(text, id : this.getRundomId);
        this.setState({tasks: temp});
    }

//================Удаление Tasks================
    removeTask = (index: number) => {
        const temp = [...this.state.tasks];
        temp.splice(index, 1);
    }

    render() {
        // const tasks = ["Task1", "Task2", "Drink Beer"];
        return (
            <div>
                <button onClick={() => this.addTask("New Task")}
                >add task
                </button>
                {/*<Task text={"Task1"}/>*/}
                {/*<Task text={"Task2"}/>*/}
                {/*<Task text={"Task3"}/>*/}
                {this.state.tasks.map((item, index) =>
                    <Task key={item} text={item} deleteTask={this.removeTask} index={index}/>
                )}
            </div>
        );
    }
}

export default TaskList;