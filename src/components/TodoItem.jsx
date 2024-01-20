import CheckIcon from './icons/CheckIcon';
import CrossIcon from './icons/CrossIcon';

const TodoItem = ({ todos, updateTodo, deleteTodo }) => {
    const { id, title, completed } = todos;
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                className={`flex-none h-5 w-5 rounded-full border-2 ${
                    completed
                        ? 'flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                        : 'inline-block'
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={`grow text-gray-600 dark:text-gray-400 ${completed && 'line-through'}`}>{title}</p>
            <button className="flex-none" onClick={() => deleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
