import { useState } from 'react';
import Header from './components/Header';
import TodoComplete from './components/TodoComplete';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialStateTodos = [
    {
        id: 1,
        title: 'Go to the gym',
        completed: true,
    },
    {
        id: 2,
        title: 'Eat breakfast',
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState('all');

    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearComplete = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobil.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4 ">
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={filteredTodos()} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                <TodoComplete computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />
                <TodoFilter changeFilter={changeFilter} />
            </main>
            <footer className="mt-8 text-center">Drag and drop to reorder list</footer>
        </div>
    );
};

export default App;
