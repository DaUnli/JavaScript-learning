const json = '{ "name": "Alex", "age": 20 }';

try {
  const data = JSON.parse(json);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON format!");
}
