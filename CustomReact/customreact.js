function customRender(reactElement,maincontainer){
    //set attributes must be repeated so causes length problem
/*
    const domElement=document.createElement(reactElement.type);
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    domElement.innerHTML=reactElement.children;

    maincontainer.appendChild(domElement);
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    maincontainer.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target:'_blank'
    },
    children: 'Google'
}

const maincontainer=document.querySelector('#root');

customRender(reactElement,maincontainer);
