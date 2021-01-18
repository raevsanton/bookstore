export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state');
        if (savedState === null) {
            return undefined;
        }
        return JSON.parse(savedState);
    }
    catch(err) {
        return undefined;
    }
}
  
export const saveState = (state: Object) => {
    try {
        const workingState = JSON.stringify(state);
        localStorage.setItem('state', workingState);
    }
    catch(err) {
        console.log(err);
    }
}
  