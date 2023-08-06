// import Form from "@/src/components/auth/form";
// import { getSession, signIn } from "next-auth/react"

// export default function SignIn() {
//     const onSubmit = async (email, password) => {
//         const data = await signIn('credentials', { redirect: false, email, password });
//         console.log(data)
//     };
//     return <Form signin={true} onFormSubmit={onSubmit} />
// };


import { signIn } from 'next-auth/react';
import Form from '@/src/components/auth/form';
import { useRouter } from 'next/router';

export default function SignIn() {
    const router = useRouter();

    const onSubmit = async (email, password) => {
        // Use signIn to attempt authentication
        const data = await signIn('credentials', { redirect: false, email, password });

        if (data.error) {
            console.log('Authentication error:', data.error);
        } else {
            console.log('Authentication successful:', data);

            // Redirect to profile page if authentication is successful
            router.push('/profile');
        }
    };

    // If the user is already authenticated, redirect to profile page
    // if (session) {
    //     router.push('/profile');
    //     return null;
    // }

    return <Form signin={true} onFormSubmit={onSubmit} />;
}

// export async function getServerSideProps({ req }) {
//     const session = await getSession({ req });

//     return {
//         props: {
//             session: session || null,
//         },
//     };
// }
