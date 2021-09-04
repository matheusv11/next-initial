function Tempo(props) {
    console.log('Oh o carro do front passando no seu ovo');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div> {dynamicDateString} (dinâmico) </div>
            <div> {props.staticDateString} (estático) </div>
        </div>
    )
}

export function getStaticProps() {
    console.log('Oh o carro estático passando no seu ovo');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;