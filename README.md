https://nimpod.github.io/nathansteele/

## Todo lists:
- Film related
    - [Home](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NksAAAA=)
    - [Toplist](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NkAAAAA=)
    - [Toplist element](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1Nj8AAAA=)
    - [Review](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NkEAAAA=)
- Music related
    - [Music](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NkgAAAA=)
- Blog related
    - [Blog](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NkIAAAA=)
    - [Blog ideas](https://to-do.microsoft.com/tasks/sharing?InvitationToken=4j41FzxHL2z5jwfbla9hbwLX9F-Ux-3LPxv4Gd2ADLpoFykJIoMPhlMy0ICsOURu0)
- Miscellaneous
    - [Website homepage](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1NkcAAAA=)
    - [Website inspo](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABqSsSEMAAAA=)
    - [Messiahs handbook](https://to-do.live.com/tasks/AQMkADAwATMwMAItZDFhYy04MWY4LTAwAi0wMAoALgAAA3s-4loccnlOoVkLtuGiwAMBAI0PlLJX8T5CsGq5PbdT6mUABpZ1Nk4AAAA=)

## Basics
### Environment variables
I am storing API keys in the [.env.local](/.env.local) file.

### Git ignore file
There a few files that I prefer not to commit to my git repository. These are listed in the [.gitignore](/.gitignore) file.


### Pushing new code
```
git add .
git commit -m "i changed something"
git push origin master --force
npm run deploy
```

### Starting localhost
```
npm start
```

## Useful things about React that I've learnt and use consistently...

### 1) Conditional logic within render method
You can incorporate conditional logic within the rendering of a React component...
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
#### A really useful feature of React, is being able to easily insert the value of a variable within a string, for example in a className attribute. See example below...
```js
<div className={`films-toplist ${view_type_classname}`}>
```
#### Another example usage...
```js
return <HashLink 
            key={num}
            to={`#album-${num}`}
            id={`link-to-album-${num}`}
        </HashLink>
```

### 3) Iterate over list to minimise code duplication
#### It's super useful to be able to iterate over a list, and then create instances of a component.
```
{arr.map(theme => {
    return <span className='myDiv' key={theme}>
        {theme}
    </span>
})}
```


## Common errors

### 1) npm error unable to resolve dependency tree
#### See the error message below...
```
npm update react-particles-js
npm error code ERESOLVE 
npm error ERESOLVE unable to resolve dependency tree npm error
```
#### Solution to the error
```
npm config set legacy-peer-deps true
```

### 2) Python initial setup
```
1) Find environment varibales in your pc settings
2) Select 'Path'
3) Copy and paste the path to where python is installed on your pc, for example...
C:\Users\natha\AppData\Local\Programs\Python\Python313\Scripts
4) That's it! Now you should be able to run python scripts
```