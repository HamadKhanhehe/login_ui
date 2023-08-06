import Form from "@/src/components/auth/form";

export default function SignUp() {
    const onSubmit = async (email, password) => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                alert("YOU ARE SUCCESSFULLY SIGNED UP");
            }
            else {
                alert("already exist")
            }

        }
        catch (err) {
            console.error(err);
        }
    }
    return <Form signin={false} onFormSubmit={onSubmit} />
}






