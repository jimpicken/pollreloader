# Pollreloader

Some Javascript and Bash to produce a simple [LiveReload](http://livereload.com/) like behaviour on linux.

Add pollreloader.js to your page template during testing, **don't run this on live sites**.

On the browser `pollreloader.js` reads `/pollfile` once a second on the webserver and the `watchfolder.sh` script updates this file on changes.

By default `watchfolder.sh` watches the current directory for changes and creates a pollfile there. To change watch directory and pollfile output supply them as arguments:

    ./watchfolder.sh /watchdir /var/www/

If you're not running your webserver locally you'll have to update `watchfolder.sh` for that, for example swap the line

    date +%s > "$POLLDIR"/pollfile
    
for

    date +%s | ssh webserver.com "cat > /var/www/pollfile"
    

