import { getSession } from "next-auth/react"

export default function Profile() {

    return <>Welcome to my Profile</>
}
export async function getServerSideProps({ req }) {
    const session = await getSession({ req })
    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        }
    }
    return {
        props: {
            session,
        }


    }

}


// export async function getServerSideProps({ req }) {
//     const session = await getSession({ req })
//     if (session) {
//         return {
//             redirect: {
//                 destination: "/profile",
//                 permanent: false
//             }
//         }
//     }
//     return {
//         props: {
//             session,
//         }


//     }
// }