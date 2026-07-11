const formatName = (firsName, lastName) => `${firsName} ${lastName}`;
const getGreeting = (timeOfDay) => {
    switch(timeOfDay.toLowerCase()) { 
        case 'morning':
            return 'Good morning';
        case 'afternoon':
            return 'Good afternoon';
        case 'evening':
            return 'Good evening';
        default:
            return 'Hello';
    }
};
const createGreeting = (firsName, lastName, timeOfDay) => {
    const greeting = getGreeting(timeOfDay); 
    const fullName = formatName(firsName, lastName);
    return `${greeting}, ${fullName}`;
};

console.log(createGreeting('Ava', 'Stone', 'morning'))