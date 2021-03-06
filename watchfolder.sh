#!/usr/bin/env sh

if [ -d "$1" ]; then
	FILE="$1"
else
	echo "No arguments given, watching and outputting to current directory."
	echo "Example: ./watch.sh [watch directory] [pollfile directory]"
	echo
	FILE="."
fi

if [ -d "$2" ]; then
	POLLDIR="$2"
else
	POLLDIR="."
fi

while inotifywait -e modify,move,create,delete -r "$FILE"; do
	sleep 1s
	# Update the following command to suit your environment
	date +%s > "$POLLDIR"/pollfile
done


