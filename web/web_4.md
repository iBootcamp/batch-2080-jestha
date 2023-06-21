# some properties of background images
1. Background image : url(...)
:use this property to set background image of body

 1. bacground-reapeat:no-repeat 
:doesnt make copies of images to fill in the screen

1. background size:cover
:makes a single copy of the img to cover the entire screen

1. bacground-position 
:sets potion of the bacground image but cant be used for background size cover

1. backgroundsize cover
:sets the width such that it just covers the scrn according to the size of the screen

1. background attachment
: if we set the value to dfixed then the background remains at the same fixed posi but hte text moves

# short hand properties
we can combine all these properties into a singe line which minimizes the code thus it is short hand properties
some props that have short hands are:-

1. margin 
: 
syntax:- margin : .........

2. background
: bg-color image repeat position etc... 
syntax:-background : ..........

# picture-tag
This tag is a substitute for *** img *** tag. This allows us to display image in varrying resolutions according to the size of scrns of the user's devices 

# favicon
 With help of the link tag we can add an icon that is displayed at the top of our tab when we open our page "link rel="icon" type="image/x-icon" href="link"" 

# table
we can add css to specific columns or rows by using nth child(even/odd) which selects only the even or odd numbered row or column in the table and applies the css to those specific parts

we can also use hover for table or anypart of it

<colgroup> this tag helps us to group the columns in the stated number and applies css specifically to them only


```
note:
use `ctrl + front-slash` for the comment 

<!--  -->
```

# Block VS Inline
1. Block: A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
 ``` eg: <address> <article> <aside>  <blockquote> <canvas> <dd><div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section ><table> <tfoot> <ul> <video> ```

2. Inline:An inline element does not start on a new line. An inline element only takes up as much width as necessary.An inline element cannot contain a block-level element!
 ```eg: <a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>```
***note: Block bhitra inline chai lekh na payo tara inline bhitra block chai lekhna hudaina as it doesn't abide by the semantics structure***

```
How do we add width and height to inline tags?
and can we even do it?
```
# CLASS VS ID
1. CLASS
:It is a element selector that can be used form multiple elements.
To create a class; write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {}:
```
.container
{
    ....
    ....
    ....
}

<p class="container">
......
......
</p>

```
2. ID
: It is an element selefctor that can be used for a single unique html element only. once an id name has been used it cannot be used again.
The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.

```
#container
{
    .......
    .......
    .......
}

<p class="container">
......
......
......
</p>

```
# Iframe tag
An HTML iframe is used to display a web page within a web page.The HTML iframe tag specifies an inline frame.
An inline frame is used to embed another document within the current HTML document.

```
syntax:
<iframe src="url" title="description"></iframe>

```

An iframe can be used as the target frame for a link.The target attribute of the link must refer to the name attribute of the iframe:
```
syntax:

<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>

```