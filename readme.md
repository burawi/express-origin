# Useless

This package is useless, you can do what it does simply by adding `/` before file path. **_Watch this video to see an example:_**

[Access files in root from children route](https://www.youtube.com/watch?v=FY_sisNvbEQ)

# Install
```
npm i express-origin --save
```

# Usage

```javascript
var express = require('express');
var expressOrigin = require('express-origin');

var app = express();
app.use(expressOrigin());
```

Now You have:
```javascript
app.get('/article/sport/:id',function (req, res, next) {
    // req.origin = /../../..
})
```

You can pass it to views to make paths relative to your domain name, Eg:
```pug
script(src= req.origin + "/js/main.js")
```
Will Give:
```html
<script src="www.example.com/js/main.js" ></script>
```
