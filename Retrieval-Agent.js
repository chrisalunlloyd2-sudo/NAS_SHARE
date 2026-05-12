const axios = require('axios');

const MASTER_URL = 'http://192.168.0.155:3000'; // This Laptop

async function fetchFromHub(query = '', type = 'worker_telemetry') {
    console.log(`[DANUBE3 RETRIEVAL] Querying Central Hub for: ${type}...`);
    try {
        const response = await axios.post(`${MASTER_URL}/api/grid/db/retrieve`, {
            query: query,
            type: type
        });

        console.log("--- HUB RETRIEVAL RESULTS ---");
        console.table(response.data.data);
    } catch (e) {
        console.error("Retrieval failed:", e.message);
    }
}

// Example: Fetch latest telemetry
fetchFromHub();
