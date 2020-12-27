import React from "react";
import CmpBulmaNavbar from "../../components/CmpBulmaNavbar/CmpBulmaNavbar";
import CmpBulmaFooter from "../../components/CmpBulmaFooter/CmpBulmaFooter";
import CmpPresentationContainer from "./CmpPresentationContainer";
import { CenterSection, Container } from "../../components/StyledAzusaCmp";
import az1 from "../../img/az1.png";
import screen from "../../img/azusa inter@2x.png";

function Presentation() {
  return (
    <div>
      <Container>
        <CmpBulmaNavbar />
        <CenterSection>
          <CmpPresentationContainer
            title="Download and install apps ? Forget it !"
            text="- User experience greatly improved. No more need to download and run installer or wait for processing. Click and play in its truest form. 
            - Making full use of 5G networking 
            - Unlike Google’s game streaming, applications are run on your computer 
            - As you start an application only the required parts are downloaded and run on your computer or mobile phone, and the rest is downloaded in background 
            - No user interaction required, no worry about space used with auto-cleaning 
            - DRM support for application purchase"
          />
          <CmpPresentationContainer
            title="Download and install apps ? Forget it !"
            text="Azusa is also a new virtual assistant, in direct competition with Siri (Apple), 
            Alexa (Amazon), Google Assistant or Cortana (Microsoft). 
            She comes with a full featured artificial intelligence running directly on your devices 
            (data is stored encrypted on your cloud account, ensuring nobody can access it) 
            and learns about you as time goes. Even in situation with no internet access, 
            Azusa can assist you! Azusa will also act as ambassador for Japan (Cool Japan) and will promote 
            Japanese culture worldwide, acting in cooperation with various Japanese cultural brands."
            position="right"
            image={az1}
          />
          <CmpPresentationContainer
            title="Protect your personal information with encrypted data!"
            text="Azusa Accounts allow users to have all their data securely backed up on our servers 
            while being fully encrypted, and accessible only to the user. 
            Data is also stored encrypted on the computer itself, ensuring lost hard drives/etc will not result 
            in data leaks. The same account can be used on multiple devices, including computers, mobile phones 
            and any supported device, with full interoperability (copy of data, etc). 
            Processes can be live-migrated between devices using the same CPU, 
            or remote-controlled between any device."
            position="left"
            image={screen}
          />
        </CenterSection>
      </Container>
      <CmpBulmaFooter />
    </div>
  );
}
export default Presentation;
