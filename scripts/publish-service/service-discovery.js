// Cron will make sure there is a JSON 
// somewhere... need to define it.
// curl ifconfig.me/all.json > ip.json

const ipSetup = require(process.argv[2]);

const serviceName = process.argv[3];
const port = process.argv[4];

const serverProperties = {
    ip: ipSetup.ip_addr,
    host: ipSetup.remote_host,
    timestamp: Date.now(),
    'service-name': serviceName,
    port: port,
    version: 'latest'
};

const payload = Buffer.from(JSON.stringify(serverProperties)).toString('base64');
console.log(payload);