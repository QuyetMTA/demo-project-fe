#!/bin/sh
# line endings must be \n, not \r\n !
echo "window.globalConfig = {" > ./js/globalConfig.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./.env >> ./js/globalConfig.js
echo "}" >> ./js/globalConfig.js