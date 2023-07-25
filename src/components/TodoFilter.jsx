const TodoFilter = ({ changeFilter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white p-4 flex justify-center gap-4 rounded-md">
                <button
                    className="hover:text-blue-500"
                    onClick={() => {
                        changeFilter('all');
                    }}
                >
                    All
                </button>
                <button
                    className="hover:text-blue-500"
                    onClick={() => {
                        changeFilter('active');
                    }}
                >
                    Active
                </button>
                <button
                    className="hover:text-blue-500"
                    onClick={() => {
                        changeFilter('completed');
                    }}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
