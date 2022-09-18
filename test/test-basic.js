const expect = require("expect.js");
const assert = require("assert").strict;
const { JSDOM } = require("jsdom");
const readFileSync = require("fs").readFileSync;
const existsSync = require("fs").existsSync;

describe("check build output for homepage", () => {
  describe("homepage", () => {
    const FILENAME = "dist/index.html";

    if (!existsSync(FILENAME)) {
      it("WARNING skipping tests because FILENAME does not exist", () => {});
      return;
    }

    let dom;
    let html;
    let doc;

    function select(selector, opt_attribute) {
      const element = doc.querySelector(selector);
      assert(element, "Expected to find: " + selector);
      if (opt_attribute) {
        return element.getAttribute(opt_attribute);
      }
      return element.textContent;
    }

    before(() => {
      html = readFileSync("dist/index.html");
      dom = new JSDOM(html);
      doc = dom.window.document;
    });

    it("should have a header", () => {
      const header = Array.from(doc.querySelectorAll("header"));

      expect(header.length).to.be.greaterThan(0);
    });

    it("should have a main", () => {
      const main = Array.from(doc.querySelectorAll("main"));

      expect(main.length).to.be.greaterThan(0);
    });

    it("should have a footer", () => {
      const footer = Array.from(doc.querySelectorAll("footer"));

      expect(footer.length).to.be.greaterThan(0);
    });

  });
});
