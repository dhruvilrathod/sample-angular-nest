echo "starting application with NodeJS version: $(node --version)"
WORK_DIR_PATH="/usr/main/sample-angular-nest/"

(cd "$WORK_DIR_PATH" && node "builds/backend/main.js") &
(cd / && nginx -g "daemon off;")