This is my website/portfolio/blog place, hopefully there will be more here one day lol. 

https://nimpod.github.io/nathansteele/

#### Pushing new code....
```
git add .
git commit -m "i changed something"
git push origin master --force
npm run deploy
```

#### Starting localhost....
```
npm start
```

## Useful things about React that I've learnt and use consistently...
### 1) Conditional logic within render method
#### You can incorporate conditional logic within the rendering of a React component...
```js
{this.props.artist == undefined ? (
    <span className='track-artist-and-title'>
        {this.props.artist} - {this.props.track}
    </span>
) : (
    <span className='track-artist-and-title'>
        {this.props.artist} - {this.props.artist_not_english} {this.props.track}
    </span>
)}
```

### 2) Insert variable value within element attribnute
#### A really useful feature of React, is being able to easily insert the value of a variable within a string, for example in a className attribute. For example...
```js
<div className={`films-toplist ${view_type_classname}`}>
```
#### or...
```js
return <HashLink 
    key={num}
    to={`#album-${num}`}
    id={`link-to-album-${num}`}
    </HashLink>
```

#### Common errors

##### Error message
```
npm update react-particles-js
npm error code ERESOLVE 
npm error ERESOLVE unable to resolve dependency tree npm error
```

##### Solution
```
npm config set legacy-peer-deps true
```

