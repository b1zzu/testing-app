const keycloakUrl = `http://${process.env.KEYCLOAK_HOST}:${process.env.KEYCLOAK_PORT}/auth`;

const config = {
  "version": 1,
  "namespace": "integration",
  "clientId": "test",
  "services": [
    {
      "id": "be432368-44b1-4e3a-9750-5ac43c9fcd78",
      "name": "keycloak",
      "type": "keycloak",
      "url": keycloakUrl,
      "config": {
        "realm": "integration",
        "auth-server-url": keycloakUrl,
        "ssl-required": "none",
        "resource": "cordova-testing-app",
        "public-client": true,
        "confidential-port": 0
      }
    },
    {
      "id": "fb8ebb60-83b1-11e9-9805-e86a640057de",
      "name": "ups",
      "type": "push",
      "url": "http://10.0.2.2:8089/",
      "config": {
        "android": {
          "senderId": "331104058747",
          "variantId": "264b7a86-f8fa-4ec8-9787-f84f0332b3db",
          "variantSecret": "caac783e-d488-47cd-aef4-c551e913a0e9"
        }
      }
    }
  ]
}

module.exports = config;
