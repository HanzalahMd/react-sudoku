import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        height: 100%;

            body {
                display: flex;
                flex-direction: column;
                height: 100%;
                margin: 0;

                #root {
                    display: flex;
                    justify-content: center;
                    height: 100%;
                    padding: 15px;
                    background-color: antiquewhite;
                    color: black;
                    font-family: sans-serif;
                }
            }
    }
`;