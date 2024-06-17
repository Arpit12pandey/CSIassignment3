const { fetchData, processData, saveData } = require('./asyncFunctions');

async function handleData() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        const result = await saveData(processedData);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

// Call the async function
handleData();
