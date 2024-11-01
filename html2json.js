function convertHtml2JsonAndSet() {
  const htmlTextAreaValue = document.getElementById("html").value;
  const jsonObj = html2json(htmlTextAreaValue);
  const jsonArea = document.getElementById("json");
  jsonArea.textContent = JSON.stringify(jsonObj, null, 2);
}

/**
 * Converts an HTML string into a structured JSON representation.
 * The function first checks if the input is a valid HTML string.
 * If valid, it processes the HTML into a JSON object with detailed structure.
 *
 * @param {string} htmlText - The HTML text to be converted into JSON.
 * @returns {Object} A JSON object containing:
 *   - "Conversion results": an array of JSON objects representing HTML elements and their hierarchy.
 *   - "Just to show that it is dynamic value (input length)": the length of the input HTML string.
 *   If the input is not a string or is invalid HTML, returns an error message.
 */
function html2json(htmlText) {
  if (typeof htmlText !== "string") {
    return "Expects a string as argument";
  }

  if (!isValidHtml(htmlText)) {
    return "Invalid HTML (Check Console)";
  }
  const rootNode = getJsonFromHtml(htmlText);

  return {
    "Conversion results": rootNode.children,
    "Just to show that it is dynamic value (input length)": htmlText.length,
  };
}

/**
 * Converts the given HTML text into a structured JSON representation.
 * The function iterates over the given HTML text using a regular expression
 * and builds a tree of JSON objects representing the HTML elements and their
 * hierarchy.
 *
 * @param {string} htmlText - The HTML text to be converted into JSON.
 * @returns {Object} The JSON object representing the root of the HTML tree.
 */
function getJsonFromHtml(htmlText) {
  const rootNode = { type: "root", children: [] };

  const nodeStack = [rootNode];
  let currentNode = rootNode;

  const tagRegex = /<(\/?)([a-z0-9]+)((?:\s+[^>]*)?)\s*(\/?)>|([^<]+)/gi;
  let match;

  while ((match = tagRegex.exec(htmlText)) !== null) {
    const [_, isClosing, tagName, attributes, isSelfClosing, textContent] =
      match;

    if (textContent) {
      handleTextContent(textContent, currentNode);
    } else if (isClosing) {
      nodeStack.pop();
      currentNode = nodeStack[nodeStack.length - 1];
    } else if (
      ["meta", "link", "img", "br", "hr", "input"].includes(
        tagName.toLowerCase()
      )
    ) {
      currentNode.children.push(createElementNode(tagName, attributes));
    } else {
      const elementNode = createElementNode(tagName, attributes);

      currentNode.children.push(elementNode);

      if (!isSelfClosing) {
        nodeStack.push(elementNode);
        currentNode = elementNode;
      }
    }
  }
  return rootNode;
}

/**
 * Appends a text node to the children of the given currentNode if the text is not empty.
 *
 * @param {string} text - The text content to be added as a node.
 * @param {Object} currentNode - The current node to which the text node will be appended.
 * @throws {Error} If currentNode is null.
 */
function handleTextContent(text, currentNode) {
  if (currentNode === null) {
    throw new Error("currentNode must be a non-null object");
  }

  const trimmedContent = (text || "").trim();
  if (trimmedContent) {
    currentNode.children.push({ type: "text", content: trimmedContent });
  }
}

/**
 * Creates a new JSON representation of an HTML element.
 * @param {string} tagName The name of the element, will be lowercased.
 * @param {string} attributes A string of attributes for the element.
 * @returns {Object} A JSON representation of the element, with the following
 *   properties:
 *   - `type`: The string "element", indicating that the object represents an
 *     HTML element.
 *   - `tagName`: The lowercased name of the element.
 *   - `attributes`: An object with the attribute names as keys and the
 *     corresponding values as values. If an attribute is a boolean attribute,
 *     its value in the returned object is an empty string.
 *   - `children`: An array that should be populated with the child nodes of the
 *     element.
 */

function createElementNode(tagName, attributes) {
  return {
    type: "element",
    tagName: tagName.toLowerCase(),
    attributes: parseAttributes(attributes),
    children: [],
  };
}

/**
 * Takes a string of HTML attributes and parses it into an object.
 * @param {string} attributesString
 * @returns {Object} An object with the attribute names as keys and the
 *   corresponding values as values.
 *
 *   The function returns an object with the attribute names as keys and the
 *   corresponding values as values. If an attribute is a boolean attribute, its
 *   value in the returned object is an empty string.
 */
function parseAttributes(attributesString) {
  const attributes = {};
  if (!attributesString || typeof attributesString !== "string") {
    return attributes;
  }

  const regex =
    /([a-z0-9-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))|\b([a-z0-9-]+)\b/gi;
  let match;

  while ((match = regex.exec(attributesString)) !== null) {
    const [
      ,
      name,
      doubleQuoteValue,
      singleQuoteValue,
      unquotedValue,
      booleanAttr,
    ] = match;

    if (name || booleanAttr) {
      attributes[name || booleanAttr] =
        doubleQuoteValue || singleQuoteValue || unquotedValue || "";
    }
  }

  return attributes;
}

function showExample1() {
  const jsonContent = {
    "Comment 1":
      "You have to think about how to take into account various html inputs so your json structure will cover them all and handle different cases.",
    "Comment 2":
      "When you make any choice in terms of selecting specific json structure for conversion - be ready to provide reasoning behind such choice.",
  };

  document.getElementById("html").value = htmlExample;
  document.getElementById("json").textContent = JSON.stringify(
    jsonContent,
    null,
    2
  );
}

function showExample2() {
  const jsonContent = {
    "Comment 1":
      "You have to think about how to take into account various html inputs so your json structure will cover them all and handle different cases.",
    "Comment 2":
      "When you make any choice in terms of selecting specific json structure for conversion - be ready to provide reasoning behind such choice.",
  };

  document.getElementById("html").value = htmlExample2;
  document.getElementById("json").textContent = JSON.stringify(
    jsonContent,
    null,
    2
  );
}

/**
 * Checks if the given HTML string is valid.
 * @param {string} html The HTML string to check.
 * @returns {boolean} true if the HTML is valid, false otherwise.
 * @throws {Error} if the HTML is invalid.
 */
function isValidHtml(html) {
  try {
    return validateTags(html) && basicValidation(html);
  } catch (error) {
    console.error("Error while validating HTML:", error);
    return false;
  }
}

/**
 * Validates that all tags in the given HTML string are properly closed.
 *
 * @throws {Error} if any tags are unclosed
 * @returns {boolean} true if all tags are closed, false otherwise
 */

function validateTags(html) {
  const stack = [];
  const tagPattern = /<\/?([a-zA-Z]+)[^>]*>/g;
  let match;

  while ((match = tagPattern.exec(html)) !== null) {
    const tag = match[1];

    const isSelfClosing =
      match[0].endsWith("/>") ||
      ["meta", "link", "img", "br", "hr", "input"].includes(tag.toLowerCase());

    if (!match[0].startsWith("</")) {
      if (!isSelfClosing) {
        stack.push(tag);
      }
    } else {
      if (stack.length === 0 || stack.pop() !== tag) {
        throw new Error("Unclosed tag");
      }
    }
  }

  if (stack.length > 0) {
    throw new Error(`Unclosed tags: ${stack.join(", ")}`);
  }

  return true;
}

/**
 * Performs a basic validation check to ensure that the provided HTML string
 * contains any tags. This is a very basic check and does not validate the
 * structure or correctness of the HTML tags. If the HTML string does not contain
 * any tags, an error is thrown.
 * @param {string} html HTML string to validate
 * @returns {boolean} true if the HTML contains any tags, false otherwise
 * @throws {Error} if the HTML does not contain any tags
 */
function basicValidation(html) {
  const tagPattern = /<\/?[\w\s="/.':;#-\/\?]+>/gi;

  if (!html.match(tagPattern)) {
    throw new Error("No tags found in HTML");
  }

  return true;
}
/**
 * Runs validation tests on the provided htmlExamples array.
 * Returns a string indicating success or failure of the tests.
 * @returns {string} "TESTS PASSED" if all samples pass validation, or
 * "TESTS FAILED" if any sample fails validation.
 */
function test() {
  const results = htmlExamples.map(({ htmlstring, isValid }) => {
    return {
      isPassed: isValid === isValidHtml(htmlstring),
      testCase: htmlstring,
    };
  });
  return results.every(({ isPassed }) => isPassed)
    ? "TESTS PASSED - HTML VALIDATED"
    : "TESTS FAILED - HTML NOT VALIDATED";
}

/**
 * Updates the content of the JSON output textarea with the results of HTML validation tests.
 * Executes the test function to determine if HTML samples pass validation, and displays
 * a success or failure message in the output area.
 */
function showTestsOutput() {
  const content = test();
  document.getElementById("json").textContent = content;
}
