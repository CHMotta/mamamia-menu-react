import "./navMenu.css"

function NavMenu({itemAtivo, setItemAtivo}){
    let itensMenu= ['Inicio', 'Gnocchi', 'Pastas', 'Bebias']
    return(
            <ul className="ul">
                {itensMenu.map((item, index) => (
                    <a
                    key={index}
                    onClick={() => setItemAtivo(item)}
                    className={itemAtivo === item ? 'ativo':''}
                    >
                        {item}
                    </a>
                ))}
            </ul>
    )
}

export default NavMenu