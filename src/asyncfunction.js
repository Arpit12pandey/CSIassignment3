function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = { ...data, processed: true };
            resolve(processedData);
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data saved: ${JSON.stringify(data)}`);
        }, 1000);
    });
}

module.exports = { fetchData, processData, saveData };
