// Create a file: src/app.js
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!'
        })
    };
};
