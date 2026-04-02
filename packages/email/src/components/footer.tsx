import { Hr, Link, Tailwind, Text } from "@react-email/components";

export function Footer({
  email,
}: {
  email: string;
}) {
  return (
    <Tailwind>
      <Hr className="mx-0 my-6 w-full border border-neutral-200" />
      <Text className="text-[12px] leading-6 text-neutral-500">
        This email was intended for <span className="text-black">{email}</span>.
        If you were not expecting this email, you can ignore this email. If you
        are concerned about your account's safety, please{" "}
        <Link
          className="text-neutral-700 underline"
          href="https://dugble.com/support"
        >
          reach out to let us know
        </Link>
        .
      </Text>
      <Text className="text-[12px] text-neutral-500">
        Dugble Technologies, Inc.
        <br />
        2261 Market Street STE 5906
        <br />
        San Francisco, CA 941114
      </Text>
    </Tailwind>
  );
}