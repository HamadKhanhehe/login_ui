
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();
    return (
        <header>
            <nav>
                <div>
                    <div className="btn1">
                      <button> <Link href="/auth/login" >{session ? "" : "Login"}</Link></button>
                        <button onClick={signOut}>Log out</button>
                    <button>    <Link href="/profile"> Profile</Link></button>
                    </div>
                </div>
            </nav>
        </header>);
}


// export function Logout() {
//     return <div>Your Are Successfully Logged Out</div>
// }