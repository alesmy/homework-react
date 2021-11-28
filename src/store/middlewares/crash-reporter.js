export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (e) {
        console.error("report: ", e, action);
    }
};