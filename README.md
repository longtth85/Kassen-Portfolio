# Portfolio Tutorial

### Folder Structure(important folders are BOLD)
```
|Kassen-Portfolio
|
|
+---bin
+---docs
+---node_modules
+---PUBLIC
|   |
|   |
|   \---JAVASCRIPTS
|   +---STATIC
|   +---stylesheets
|   +---WORK
```
### Adding Thumbnails
##### The important folders here are static and work.

Make sure the pictures are in a .png format and that the filename is the same as the
corresponding html file in the **work** folder.

```
Example: the picture kassen.png corresponds to kassen.html
```

Drop the .png file in the **static** folder.

**That's it!**

### Adding New Videos
##### The important folders here are javascripts and work.

Get the embed code and create a new html file in the work folder.

HTML template for youtube videos:
```
<h2>Alexander Rybak - That's how you write a song</h2>

<div class="img-container">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SixPA1jhynE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<p>
    <ul>
        <li>Animator: Ola Kassen</li>
    </ul>
</p>
```
HTML template for vimeo videos:
```
<h2>JNS - SPILL</h2>

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/251146229" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/251146229">JNS - SPILL</a> from <a href="https://vimeo.com/olakassen">Ola Kassen</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<p>//<br />
    <br />
    Directed, shot, edited, VFX by @OLAKASSEN<br />
    Main idea by JNS<br />
    Animator: David Bjornstad<br />
    Thanks to Carl Amadou Seck, Jimmy Moen &amp; Erland Skui</p>
```

Now you have to edit the **index.js** file inside the **javascripts** folder.

```
// Titles for videos page
const index = ["gone", "jns", "experimental", "livate", "encore",
    "grater", "devil", "showreel", "gh4", "midsummer", "2014"];

// Titles for additional videos page
const addVideos = ["drimmedua", "deilig"];

// Titles for vfx page
const vfx = ["ojeheianne", "rybak", "shoo"];

// Titles for graphics page
const graphics = ["test"];
```

Add the html filename to the list you want.

```
Example: "gone" and "jns" in the index list corresponds to gone.html and jns.html in
the work folder
```