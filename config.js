const os = require("os");
const path = require("path");
const rc = require("rc");

const config = rc("tfvm", {
  TERRAFORM_DOWNLOAD_URL: "https://releases.hashicorp.com/terraform",
  HOME_DIR: os.homedir(),
  STORAGE_DIR: path.join(os.homedir(), ".tfvm"),
});

module.exports = {
  TERRAFORM_DOWNLOAD_URL: config.TERRAFORM_DOWNLOAD_URL,
  HOME_DIR: config.HOME_DIR,
  STORAGE_DIR: config.STORAGE_DIR,
};
