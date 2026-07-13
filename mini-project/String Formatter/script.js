const cleanText = (text) => {
    return text.trim();
}

const capitalize = (text) => {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

const formatDisplayName = (firstName, lastName) => {
    const filterFirstName = capitalize(cleanText(firstName));
    const filterLastName = capitalize(cleanText(lastName));
    return `${filterFirstName} ${filterLastName}`;
};

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));

