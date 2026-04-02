import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Footer } from "../components/footer";

export default function WelcomeEmail({
  email = "email@dugble.com",
}: {
  email: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Dugble</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src="https://assets.dugble.com/wordmark.png"
                height="32"
                alt="Dugble"
              />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-xl font-semibold text-black">
              Welcome to Dugble!
            </Heading>
            <Text className="mb-8 text-sm leading-6 text-neutral-600">
              Thank you for signing up for Dugble! You can now start creating
              and managing short links and track their performance.
            </Text>

            <Section className="my-8">
              <Link
                className="rounded-lg bg-black px-4 py-2.5 text-center text-[14px] font-medium text-white no-underline"
                href="https://app.dugble.com"
              >
                Go to your dashboard
              </Link>
            </Section>

            <Footer email={email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
