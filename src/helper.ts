const truncate = (text: string): string => {
    return text.length >= 25 ? text.slice(0, 25) + "...": text;
}

export { truncate }