echo "starting application with NodeJS version: $(node --version)"
WORK_DIR_PATH="/usr/main/sample-angular-nest/"
NODE_MODULE_SIZE=$(du -hs ""$WORK_DIR_PATH"node_modules")
ANGULAR_CACHE_SIZE=$(du -hs ""$WORK_DIR_PATH".angular")
DIRECTORY_TOTAL_SIZE=$(du -hs "$WORK_DIR_PATH")

echo "NODE_MODULE_SIZE: $NODE_MODULE_SIZE"
echo "ANGULAR_CACHE_SIZE: $ANGULAR_CACHE_SIZE"
echo "DIRECTORY_TOTAL_SIZE: $DIRECTORY_TOTAL_SIZE"

(cd "$WORK_DIR_PATH" && node "builds/backend/main.js") &
(cd / && nginx -g "daemon off;")