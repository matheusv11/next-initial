import { useState } from 'react';
import Link from 'next/link';

function Home (){
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Acessar página sobre</a>
            </Link>
            
            <Contador/>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(0);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Incrementar</button>
        </div>
    )
    
}

export default Home;