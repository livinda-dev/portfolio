import Container from "../Container";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <Container className="py-16">
        <SectionHeader
          title={<>About Me</>}
          subtitle={
            <>I am a web developer with hands-on experience from a 3-month internship at CamMob Co. Ltd, working across frontend and backend tasks to ship features end-to-end.</>
          }
        />
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p>
            I enjoy turning ideas into real products. I’ve worked with modern tools like React, Next.js, Tailwind CSS on the frontend, and Node.js, Express, PostgreSQL and Firebase on the backend. I also build mobile apps with Flutter and Dart.
          </p>
          <p>
            During my internship at CamMob Co. Ltd, I contributed to UI implementation, API development, and database integration, collaborating with a small team and learning best practices like code reviews and iterative delivery.
          </p>
        </div>
      </Container>
    </section>
  );
}
