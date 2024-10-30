function convertHtml2JsonAndSet() {
  const htmlTextAreaValue = document.getElementById("html").value;
  const jsonObj = html2json(htmlTextAreaValue);
  const jsonArea = document.getElementById("json");
  jsonArea.textContent = JSON.stringify(jsonObj, null, 2);
}

function html2json(htmlText) {
  if (typeof htmlText !== "string") {
    return "Expects a string as argument";
  }

  const rootNode = getJsonFromHtml(htmlText);

  return {
    "Conversion results": rootNode.children,
    "Just to show that it is dynamic value (input length)": htmlText.length,
  };
}

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

function handleTextContent(text, currentNode) {
  if (currentNode === null) {
    throw new Error("currentNode must be a non-null object");
  }

  const trimmedContent = (text || "").trim();
  if (trimmedContent) {
    currentNode.children.push({ type: "text", content: trimmedContent });
  }
}

function createElementNode(tagName, attributes) {
  return {
    type: "element",
    tagName: tagName.toLowerCase(),
    attributes: parseAttributes(attributes),
    children: [],
  };
}

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
  console.log("showExample1");
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
  console.log("showExample2");
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
