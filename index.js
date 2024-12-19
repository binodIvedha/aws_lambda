exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            event: event
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return response;
};
