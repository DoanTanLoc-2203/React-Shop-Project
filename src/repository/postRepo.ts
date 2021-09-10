/** @format */

import repository from "./repository";

const resource = "/posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get() {
    return repository.get(`${resource}`);
  },
  getItem(itemId: number) {
    return repository.get(`${resource}/${itemId}`);
  },
};