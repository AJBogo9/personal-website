import { Container, Content, Footer, Header } from "rsuite";
import NavigationBar from "../components/NavigationBar";
import { About } from "@/components/content/About";
import { Experience } from "@/components/content/Experience";
import "rsuite/dist/rsuite.min.css";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <Container>
      <Header>
        <NavigationBar />
      </Header>
      <Content>
        <About />
        <Experience />
        <Contact />
      </Content>
      <Footer>{/* Something about me here */}</Footer>
    </Container>
  );
}
