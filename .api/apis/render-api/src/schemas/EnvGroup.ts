import EnvGroupLink from './EnvGroupLink.js';
import EnvVar from './EnvVar.js';
import SecretFile from './SecretFile.js';

const EnvGroup = {
  "title": "envGroup",
  "x-readme-ref-name": "envGroup",
  "type": "object",
  "required": [
    "createdAt",
    "envVars",
    "id",
    "name",
    "ownerId",
    "secretFiles",
    "serviceLinks",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "serviceLinks": {
      "description": "List of serviceIds linked to the envGroup",
      "type": "array",
      "items": EnvGroupLink
    },
    "environmentId": {
      "type": "string"
    },
    "envVars": {
      "type": "array",
      "items": EnvVar
    },
    "secretFiles": {
      "type": "array",
      "items": SecretFile
    }
  },
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvGroup
