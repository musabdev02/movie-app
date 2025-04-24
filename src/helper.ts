const truncate = (text: string): string => {
    return text.length >= 25 ? text.slice(0, 25) + "..." : text;
};

const monthName = (num: string): string => {
    const first = Number(num.slice(0, 2))
    const monthNames= ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[first-1];
    return monthName;
}

export { truncate, monthName }