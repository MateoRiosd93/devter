import { colors } from "@/styles/theme";

export function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    background: ${colors.black};
                    border: 0;
                    color: #fff;
                    border-radius: 9999px;
                    font-size: 14px;
                    font-weight: 800;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    padding:8px 24px;
                    margin-top: 24px;
                    transition: opacity .3s ease;
                    cursor: pointer;
                }

                button:hover {
                    opacity: .7;
                }
            `}</style>
        </>
    );
}
