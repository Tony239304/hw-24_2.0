import * as React from "react";

type Props = {
    text: string;
    deleteTask: (index: number) => void;
    index: number;
}


const Task: React.FC<Props> = ({text, deleteTask, index}) => {
    function handleClickEdit() {
        alert("button Edit clicked!")

    }

    function handleClickRemove() {
        // alert("button Removed!")
        deleteTask(index);
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleClickEdit}
            >Edit
            </button>
            <button onClick={handleClickRemove}
            >Remove
            </button>
        </div>
    );
};

export default Task;

