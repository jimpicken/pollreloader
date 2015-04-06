# Poll Reloader

Some Javascript and Bash to reload a browser window when your pages source files have been updated. Useful for trying CSS. Inspired by [LiveReload](http://livereload.com/), but for use with Linux. 

Add `pollreloader.js` to your page template during testing, **don't run this on live sites**.

On the browser `pollreloader.js` reads `/pollfile` once a second, when it detects a change the browser is then reloaded. A `watchfolder.sh` script is used to update the pollfile on changes.

`watchfolder.sh` requires inotifywait, on Ubuntu this is in the `inotify-tools` package.

By default `watchfolder.sh` watches the current directory for changes and creates a pollfile there. To change watch directory and pollfile output supply them as arguments:

    ./watchfolder.sh /watchdir /var/www/

If you're not running your webserver locally you'll have to update `watchfolder.sh` for that, for example swap the line

    date +%s > "$POLLDIR"/pollfile
    
for

    date +%s | ssh webserver.com "cat > /var/www/pollfile"
    

