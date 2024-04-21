import { baseApi } from "./base.api";

export function getFeedback() {
  return baseApi.get("/clients/12/feedback");
}

export function addFeedback(feedback) {
  return baseApi.post("/clients/12/feedback", feedback);
}
