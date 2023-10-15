import { signIn } from "next-auth/react";
import Button from "./Button";

function SignIn({ }) {
    return (
        <div className="bg-[#1E1E1E] flex flex-col w-full">
            <main className="w-full text-center">
                <strong className="text-[25px] leading-[30px] font-Figtree-Semibold text-white">Not signed in</strong>
                <br />
                <button onClick={() => signIn("discord", { callbackUrl: "http://localhost:3005/api/callback/discord" })}>
                    <Button>Sign in</Button>
                </button>
            </main>
        </div>
    );
}

export default SignIn;