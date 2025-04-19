import { Container, Content, Footer, Header } from "rsuite";
import NavigationBar from "../components/NavigationBar";
import { About } from "@/components/content/About";
import { Experience } from "@/components/content/Experience";

export default function Home() {
  return (
    <Container>
      <Header>
        <NavigationBar />
      </Header>
      <Content>
        <About />
        <Experience />
      </Content>
      <Footer>{/* contact form will be put here */}</Footer>
    </Container>
  );
}
