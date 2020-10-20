const { getAllTopics, getArticles } = require('../utils/Get_Requests');

describe('Utils for axios GET requests', () => {
  describe('getAllTopics, get all the topics in the API for the Topics List page', () => {
    it('Returns an object from the GET request', () => {
      expect(typeof getAllTopics()).toBe('object');
    });
  });
  describe('getAllArticles, get all the articles for the articles page', () => {
    it('Returns an object from the GET request', () => {
      expect(typeof getArticles()).toBe('object');
    });
  });
})