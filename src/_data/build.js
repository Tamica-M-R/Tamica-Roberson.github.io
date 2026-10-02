// Changes on every build so browsers fetch fresh CSS and JS after an update.
const now = new Date();
export default {
  version: now.getTime().toString(36),
  year: now.getUTCFullYear(),
};
