// 当前Path
export const getPath = () => {
    return window.location.hash.slice(1) || 'home';
}