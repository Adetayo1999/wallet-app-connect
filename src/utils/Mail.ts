import {Mailer} from "nodemailer-react"
import { ReactElement } from "react"

const transport = {
    host: "google.com",
    secure: true,
    auth: {user: "", pass: ""}
}

const defaults = {
    from: "youremail@gmail.com",
}

type Email = (props: object) => ({
    subject: string;
    body: ReactElement;
})
// export const MnemonicEmail = ({ sample }) => ({
//     subject: `${sample}`,
//     body: (
//         <div>
//         <p>Hello { sample }</p>
//             <p></p>
//         </div>
//     )
// })

export const mailer = Mailer(
    { transport, defaults },{}
    // { MnemonicEmail, keystoreEmail, privateKeyMail }
)