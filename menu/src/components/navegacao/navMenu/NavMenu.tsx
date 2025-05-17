import "./navMenu.css"

function NavMenu(){
    let itensMenu= [{
        nome:'Inicio',
        href: '../../../App.tsx'
    }, {
        nome:'Gnocchi',
        href: ''
    }, {
        nome:'Pastas',
        href: '#'
    }, {
        nome:'Bebidas',
        href: '#'
    }]
    return(
            <ul className="ul">
                {itensMenu.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>
                            {item.nome}
                        </a>
                    </li>
                ))}
            </ul>
    )
}

export default NavMenu