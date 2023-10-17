// vamos a estraer los estilos del AppLayout
import { colors, fonts, breakpoints } from "@/styles/theme";
import { addOpacityToColor } from "@/styles/utils";
import css from "styled-jsx/css";

const background = addOpacityToColor(colors.primary, 0.33);

// Con las tres lineas de background generamos un fondo de punticos.
export const globalStyles = css.global`
    html,
    body {
        padding: 0;
        background-image: 
            radial-gradient(${background} 1px, #fdfdfd 1px),
            radial-gradient(${background} 1px, #fdfdfd 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        margin: 0;
        font-family: ${fonts.base};
    }

    * {
        box-sizing: border-box;
    }
`;

export default css`
    div {
        display: grid;
        height: 100vh;
        place-items: center;
    }

    main {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
    }

    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`;
