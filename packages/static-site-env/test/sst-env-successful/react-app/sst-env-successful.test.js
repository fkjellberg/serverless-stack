const { runStartCommand } = require("../../helpers");

test("sst-env-successful", async () => {
  const result = await runStartCommand(__dirname);

  expect(result).toContain("my-url");
});
