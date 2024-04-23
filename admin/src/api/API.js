import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.10.16.86:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const questionsAPI = {
  getAllQuestions() {
    return instance.get(`get-all`).then((response) => response.data);
  },
  addQuestion(name, question) {
    return instance
      .post(`admin/create-research`, { name, question })
      .then((res) => res.data);
  },
  getOneQuestion(uuid) {
    return instance.get(`admin/get-one/` + uuid).then((res) => res.data);
  },
  addChoice(uuid, choice) {
    return instance
      .post(`admin/add-choice/` + uuid, { choice })
      .then((res) => res.data);
  },
  deleteResearch(uuid) {
    return instance
      .delete(`/admin/delete-one-research/` + uuid)
      .then((res) => res.data);
  },
  deleteChoice(researchId, choiceId) {
    return instance
      .delete(`/admin/delete-choice/${researchId}/${choiceId}`)
      .then((res) => res.data);
  },
  getGeminiResponse(uuid) {
    return instance
      .post(`admin/get-gemini-response/` + uuid)
      .then((res) => res.data);
  },
};
