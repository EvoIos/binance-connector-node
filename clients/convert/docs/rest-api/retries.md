# Retries Configuration

```typescript
import { Convert, ConvertRestAPI } from '@binance/convert';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Convert({ configurationRestAPI });

client.restAPI
    .listAllConvertPairs()
    .then((res) => res.data())
    .then((data: ConvertRestAPI.ListAllConvertPairsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
