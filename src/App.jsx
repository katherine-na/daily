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
        completed: 'true',
    },
    {
        id: 2,
        title: 'Go to the gym',
        completed: 'false',
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobil.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4 ">
                <TodoCreate />
                <TodoList todos={todos} />
                <TodoComplete />
                <TodoFilter />
            </main>
            <footer className="mt-8 text-center">Drag and drop to reorder list</footer>
        </div>
    );
};

export default App;
