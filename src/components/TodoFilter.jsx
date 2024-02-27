const TodoFilter = ({ changeFilter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="pl-10 flex flex-col items-start gap-4 rounded-md text-white text-xl">
                <button
                    className="hover:text-menta"
                    onClick={() => {
                        changeFilter('all');
                    }}
                >
                    All
                </button>
                <button
                    className="hover:text-menta"
                    onClick={() => {
                        changeFilter('active');
                    }}
                >
                    Active
                </button>
                <button
                    className="hover:text-menta"
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
