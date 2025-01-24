const dotenv = require("dotenv");

dotenv.config({ path: "./.env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REPOSITORY,
  DEPLOY_REF, // можно указать дефолтное значение через = "origin/master",
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF, // и тут захардкодить ветку
      repo: DEPLOY_REPOSITORY, // тут можно захардкодить репозиторий
      path: DEPLOY_PATH,
      "post-deploy": "pwd && npm ci && npm run build",
    },
  },
};
