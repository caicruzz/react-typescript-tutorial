import "./styles.css";
import React, {useRef} from "react";

type InputFieldProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}

export const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAddTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <form className="input" onSubmit={(e) => {
        handleAddTodo(e);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    }}>
        <input
            ref={inputRef}
            type="input"
            placeholder={"Enter a task:"}
            className="input__box"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
        <button className="input_submit" type="submit">Go</button>
    </form>
}