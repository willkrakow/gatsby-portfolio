export const capitalized = (s: string) => {
    if (typeof s !== 'string') {
        return ''
    }
    return s.charAt(0).toUpperCase() + s.slice(1)
}