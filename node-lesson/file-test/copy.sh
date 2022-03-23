#!/bin/sh
cd D:/personGithub/node-lesson/file-test/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log