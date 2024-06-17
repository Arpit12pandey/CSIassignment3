const { fetchData, processData, saveData } = require('../src/asyncFunctions');

describe('Async Functions', () => {
    test('fetchData should return data', async () => {
        const data = await fetchData();
        expect(data).toEqual({ id: 1, name: "John Doe" });
    });

    test('processData should return processed data', async () => {
        const data = await processData({ id: 1, name: "John Doe" });
        expect(data).toEqual({ id: 1, name: "John Doe", processed: true });
    });

    test('saveData should return success message', async () => {
        const message = await saveData({ id: 1, name: "John Doe", processed: true });
        expect(message).toBe('Data saved: {"id":1,"name":"John Doe","processed":true}');
    });
});
