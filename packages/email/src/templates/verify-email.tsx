import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Footer } from "../components/footer";

export default function VerifyEmail({
  email = "email@dugble.com",
  url = "http://localhost:8888/auth/reset-password/adaf8468f590e70bb60fe40983321c2719c7bd2437c1f8a53f7c90a",
}: {
  email: string;
  url: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Confirm your Dugble email address</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8 text-center">
              <Img
                src="https://assets.dugble.com/wordmark.png"
                height="32"
                alt="Dugble logo"
              />
            </Section>
            <Heading className="mx-0 my-7 text-xl font-medium text-black">
              Please confirm your email address
            </Heading>
            <Text className="text-sm leading-6">
              Click the button below to verify your email and complete your sign
              up:
            </Text>
            <Section className="my-8 text-center">
              <a
                href={url}
                className="inline-block rounded bg-black px-6 py-3 text-white font-semibold"
              >
                Verify Email
              </a>
            </Section>
            <Text className="text-sm leading-6 text-black">
              This link expires in 10 minutes.
            </Text>
            <Footer email={email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
