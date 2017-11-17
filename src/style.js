const style ={
    product: {
        color: '#132639'
    },
    main: {
        background: '#ffffff',
        padding: '5px',
        margin: '0',
        color: '#132639'
    },
    title: {
        textAlign: 'center',
        background: 'linear-gradient(#337777, #0088aa)',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 50px #337777',
        color: '#ffffff'
    },
    quote: {
        fontStyle: 'italic',
        fontSize: '40px'
    },
    author: {
        textAlign: 'right'
    },
    menu: {
        listStyleType: 'none',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // border: '2px dotted #337777',
        // backgroundColor: '#ccccbb',
        // boxShadow: '0 0 50px #337777',
        // borderRadius: '5px'
    },
    block: {
        flexBasis: '30%px',
        padding: '10px'
    },
    list: {
        listStyleType: 'none',
        margin: '0px',
        padding: '0px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        color: '#132639',
        width: '100%'
    },
    listItem: {
        display: 'block',
        margin: '5px',
        padding: '5px',
        width: '20%',
        height: '290px',
        border: '3px double #0088aa',
        borderRadius: '5px',
        boxSizing: 'border-cox',
        boxShadow: '0 0 50px #cc3344'
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        position: 'absolute',
        margin: 'auto',
        left: '0',
        top: '0',
        bottom: '0',
        right: '0'
    },
    imageContainer: {
        textAlign: 'center',
        width: '100%',
        height: '80%',
        position: 'relative'
    },
    link: {
        textDecoration: 'none',
    },
    name: {
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#666644'
    },
    price: {
        color: '#666644',
        fontWeight: 'bold'
    },
    gallery: {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '50%',
        height: '500px',
        border: '1px dotted #998877',
        borderRadius: '5px',
        lineHeight: '500px',
        float: 'left'
    },
    picture: {
        maxHeight: '490px',
        maxWidth: '80%',
        margin: '5px auto',
        boxSizing: 'border-box',
        verticalAlign: 'middle'
    },
    productName: {
        backgroundColor: '#ddaa33',
        borderRadius: '5px',
        color: '#FFFFF0',
        fontSize: '24px',
        padding: '10px',
        width: '100%'
    },
    features: {
        margin: '50px',
        align: 'center',
        width: '100%'
    },
    feature: {
        color: '#cc3344'
    },
    description: {
        width: '100%'
    },
    definition: {
        color: '#556655'
    },
    prices: {
        color: '#556655',
        width: '100%'
    },
    pictureDescription: {
        float: 'right',
        marginRight: '1%',
        width: '48%'
    },
    leftArrow: {
        height: '100%',
        width: '10%',
        // opacity: '.0',
        float: 'left',
        border: 'none'
    },
    rightArrow: {
        height: '100%',
        width: '10%',
        // opacity: '.0',
        float: 'right',
        border: 'none',
        ':hover': {
            border: '3px solid black'
        }
    },
    catalog: {
        border: '1px solid black',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    catalogName: {
        border: '1px solid black',
    },
    radio: {
        display: 'none'
    },
    page: {
        display: 'flex',
        flexDirection: 'row'
    }
};

module.exports = style;