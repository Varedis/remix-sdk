import { createContext } from 'react';
import type { LDClient as LDServerClient, LDFlagSet } from 'launchdarkly-node-server-sdk';
import type {LDClient as LDBrowserClient} from 'launchdarkly-js-client-sdk';
/**
 * The LaunchDarkly context stored in the Provider state and passed to consumers.
 */
interface LDContext {
  /**
   * Contains all flags from LaunchDarkly. This object will always exist but will be empty {} initially
   * until flags are fetched from the LaunchDarkly servers.
   */
  flags: LDFlagSet;

  /**
   * An instance of `LDClient` from the LaunchDarkly Node SDK (`launchdarkly-node-server-sdk`).
   * This will be be undefined initially until initialization is complete.
   *
   * @see https://docs.launchdarkly.com/sdk/server-side/node-js
   */
  ldClient?: LDServerClient | LDBrowserClient;

}

/**
 * @ignore
 */
const context = createContext<LDContext>({ flags: {}, ldClient: undefined });
const {
  /**
   * @ignore
   */
  Provider,
  /**
   * @ignore
   */
  Consumer,
} = context;

export { Provider, Consumer, LDContext };
export default context;
