// @ts-ignore
import { useFlags, getContext } from 'remix-sdk/client';

export default function Index() {
  const { 'dev-test-flag': devTestFlag } = useFlags();

  const { ldClient } = getContext();

  ldClient.identify({ key: "1234", email: "rob.scott@haleon.com"})

  let user
  if (ldClient.getUser) {
    user = ldClient.getUser();
  }

  return <>
    <p>{devTestFlag ? `Welcome to Remix with LaunchDarkly!` : `Welcome to Remix!`}</p>

    <p>User: {user ? user.email : "None"}</p>
  </>;
}
