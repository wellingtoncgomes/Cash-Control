import {Box, Center, Input, Button} from "@chakra-ui/react";
import {login} from "../services/login";
import DButton from "./DButton";

export const Card = () => {
    return(
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Center>
                <DButton
                    onClick={login}
                />
            </Center>
        </Box>
    );
};
// interface ICard {
//     id: number,
//     paragraph: string,
//     details: string,

// }


// export const Card = ({id, paragraph, details}: ICard) => {
//        return(
//         <div>
//             <h1>Card {id}</h1>
//             <p>{paragraph}</p>
//             <p>{details}</p>
//         </div>
//     )
// }