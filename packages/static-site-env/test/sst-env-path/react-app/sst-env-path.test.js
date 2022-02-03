const { runStartCommand } = require("../../helpers");

test("sst-env-path", async () => {
  const result = await runStartCommand(__dirname);

  expect(result).toContain("my-url");
});
