import MoonIcon from './icons/MoonIcon';

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-white text-3x1 font-semibold uppercase tracking-[]0.3em">Things to do</h1>
                <button>
                    <MoonIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
