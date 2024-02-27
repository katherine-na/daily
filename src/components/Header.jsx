import { useEffect, useState } from 'react';

const Header = () => {

    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December "];

    const date = () => {
        const currentDate = new Date();
        const dayWeek = daysWeek[currentDate.getDay()];
        const day = currentDate.getDate();
        const mounth = months[currentDate.getMonth()];

        return `${dayWeek} ${day} de ${mounth}`;
    }

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-white text-4xl font-semibold uppercase tracking-[]0.3em pb-3">Today</h1>
            </div>
            <div>
                <p className='pb-10 text-menta'>{date()}</p>
            </div>
        </header>
    );
};

export default Header;
