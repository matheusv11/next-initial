// import { useRouter } from 'next/router'; //CLIENT-SIDE
// export async function getServerSideProps(context) { //SERVER-SIDE RODA NO BACKENDS
//     const id = context.query.id;

//     return {
//         props: {
//            id: id
//         }
//     }
// }

export async function getStaticPaths () {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            }
        ],
        fallback: 'blocking'  //FALSE //TRUE //BLOCKING
    }
}

export async function getStaticProps (context) {
    await delay(5000);
    const id = context.params.id;

    return {
        props:{
            id: id
        }
    }
}

function Produtos (props) {
    // const router = useRouter();
    // const id = router.query.id;

    return (
        <div>ID do produto: {props.id}</div>
    )
}

export default Produtos;

const delay = ms => new Promise(resolve=> setTimeout(resolve, ms));
