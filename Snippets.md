```js
renderGrid() {
    const items = this.props.items;
    let  renderedItems = [];

    const interval = 3;
    for ( let i = 0; i < items.length; i += interval ) {
        const cluster = items.slice(i, (i+interval));

        let renderedDiv = cluster.map( (item) => {
            return (
                <div>
                    <Component item={item} />
                </div>
            );
        } );

        rendereditems.push(
            <div class="row card-deck">
                { renderedDiv }
            </div>
        );
    }
    return rendereditems;
}
```

### File Handling Image

```js
render() {
    return (
        <form>
            <div>
                <div>
                    <input type="file" onChange={ this.handleImageChange } />
                </div>
            </div>
        </form>
    );
}

handleImageChange = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
        this.setState({
            ...this.state,
            image: reader.result
        });
    }
    reader.readAsDataURL(file)
}

```