// src/utils/db.js
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['localhost'], 
    localDataCenter: 'datacenter1',
    keyspace: 'test_keyspace',
});

client.connect()
    .then(() => console.log('Cassandra connecté'))
    .catch(err => console.error('Erreur de connexion à Cassandra:', err));

module.exports = client;
