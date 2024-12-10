exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            timestamp: new Date().toISOString()
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return response;
};
