#!/bin/bash

echo "NOTICE: This is the redefined startup script!"

npm run build && npm prune --production && npm start
