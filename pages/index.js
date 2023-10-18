import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Image from "next/image";
import { colors } from "@/styles/theme";
import { Button } from "@/components/Button";
import GitHub from "@/components/Icons/GitHub";
import { loginWithGitHub, onAuthStateChanged } from "@/firebase/client";
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(setUser);
    }, []);

    const handleClick = () => {
        loginWithGitHub()
            .then((user) => {
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Head>
                <title>Devter 🐦</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppLayout>
                <section>
                    <Image
                        src="/devter-logo.png"
                        width={80}
                        height={80}
                        alt="Logo"
                    />
                    <h1>Devter</h1>
                    <h2>
                        Talk about development <br /> with developers. 👋
                    </h2>
                    <div>
                        {user === null && (
                            <Button onClick={handleClick}>
                                <GitHub fill="#fff" width={24} height={24} />
                                Login with GitHub
                            </Button>
                        )}
                        {user && user.displayName && (
                            <div>
                                <p>{user.displayName}</p>
                            </div>
                        )}
                    </div>
                </section>
            </AppLayout>

            <style jsx>{`
                section {
                    display: grid;
                    height: 100%;
                    place-content: center;
                    place-items: center;
                }

                h1 {
                    color: ${colors.secondary};
                    font-weight: 800;
                    margin-bottom: 0;
                }

                h2 {
                    color: ${colors.primary};
                    font-size: 18px;
                    margin: 0;
                    text-align: center;
                }
            `}</style>
        </>
    );
}
