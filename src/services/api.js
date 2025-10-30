// later this will connect to your AWS API Gateway
export async function getTasks() {
  const data = require("../data/tasks.json");
  return data;
}
