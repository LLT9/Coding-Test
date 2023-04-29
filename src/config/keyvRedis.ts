import KeyvRedis from "@keyv/redis";

const keyvRedis = new KeyvRedis(String(process.env.REDIS_URL));

keyvRedis.on("Redis Error Listener", (error) =>
  console.log("Redis Connection Error", error)
);

export { keyvRedis };
