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