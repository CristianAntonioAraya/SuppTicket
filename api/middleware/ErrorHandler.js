const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
};
const handleError = (err, req, res, next) => {
    res.status(500).json({
        ok: false,
        message: err.message,
        stack: err.stack,
    });
};

const boomErrorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
};

export { boomErrorHandler, logError, handleError };
