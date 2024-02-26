import { generateClient } from "aws-amplify/api";

type Func<T extends any[], R> = (...args: T) => R; // eslint-disable-line @typescript-eslint/no-explicit-any

const client = generateClient();

const wait = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const maxRetries = 3;

const retry =
  <T extends any[], R>(originalFunction: Func<T, R>): Func<T, Promise<R>> =>
  async (...args: T) => {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    let retries = 0;
    let error: Error;

    for (;;) {
      try {
        return originalFunction(...args);
      } catch (err) {
        console.debug(err);
        retries += 1;

        const errors = (err as { errors: Error[] }).errors || [];
        [error] = errors;

        if (error && error.message === "Network Error") {
          if (retries > maxRetries) {
            console.info("GraphQL Network Error: Too many retries", {
              extra: { json: JSON.stringify(err), retries },
            });

            throw err;
          }

          console.error("We got a network error, we should retry", retries);
          await wait(2 ** retries * 10); // eslint-disable-line no-await-in-loop
        } else {
          // If max retries reached, throw the last error
          console.error("GraphQL Error2", err);

          throw err;
        }
      }
    }
  };

export const amplifyGraphql = retry(client.graphql);
