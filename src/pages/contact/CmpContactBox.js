import React, {useEffect, useState} from "react";
import {rest} from '@karpeleslab/klbfw'

import az2 from "../../img/az2.png";
import {ContactBox, StyledContactButton, StyledContactP, StyledH1} from "../../components/StyledAzusaCmp";

function CmpContactBox() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendEnabled, setSendEnabled] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (email.trim() === '' ||
            name.trim() === '' ||
            subject.trim() === '' ||
            message.trim() === ''
        ) {
            setSendEnabled(false);
            return;
        }

        setSendEnabled(true)

    }, [email, name, subject, message, setSendEnabled]);


    const sendHandle = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const params = {
            Email: email,
            Name: name,
            To: "sppt-2jtnek-af35-e5vn-mvze-nwrrpd4i",
            Subject: subject,
            Message: message,

        };

        rest('Support/Ticket', 'POST', params)
            .then(() => {
                setSuccess(true);
                setLoading(false);
                setEmail('');
                setName('');
                setSubject('');
                setMessage('');
                setTimeout(() => setSuccess(false), 5000)
            })
            .catch(err => {
                setLoading(false);
                setError(err.message)
            })
    };

    return (
        <ContactBox>
            <form onSubmit={sendHandle}>
                <div className="columns">
                    <div className="column">
                        <StyledH1>Got Questions ? </StyledH1>
                        <StyledContactP>Perfect, we got answers !</StyledContactP>
                        <img src={az2} alt=""/>
                    </div>
                    <div className="column">
                        {error && <div className="notification is-danger">{error}</div>}
                        {success && <div className="notification is-success">
                            We have well received your message, our team will answer you as soon as possible.
                        </div>}
                        <StyledContactP>Email Address*</StyledContactP>
                        <input className="input" type="email" placeholder="" disabled={loading} required value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <StyledContactP>Name*</StyledContactP>
                        <input className="input" type="text" placeholder="" disabled={loading} required value={name}
                               onChange={e => setName(e.target.value)}/>
                        <StyledContactP>Subject*</StyledContactP>
                        <input className="input" type="text" placeholder="" disabled={loading} required value={subject}
                               onChange={e => setSubject(e.target.value)}/>
                        <StyledContactP>Message*</StyledContactP>
                        <div className="field">
                            <div className="control">
              <textarea className="textarea is-small" placeholder="" disabled={loading} value={message}
                        onChange={e => setMessage(e.target.value)}>

              </textarea>
                            </div>
                        </div>
                        <StyledContactP>*required fields</StyledContactP>
                        <StyledContactButton className="button is-rounded" disabled={!sendEnabled || loading}>
                            SEND
                        </StyledContactButton>
                    </div>
                </div>
            </form>
        </ContactBox>
    );
}

export default CmpContactBox;
