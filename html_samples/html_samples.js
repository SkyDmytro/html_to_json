const htmlExample2 = `<div>
<p>Hello world!</p>
  <button>Click me!</button>
  <textarea>Some very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long string.</textarea>
</div>
`;
const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Sample HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the webpage.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the webpage.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;

const htmlExamples = [
  {
    htmlstring:
      "<!DOCTYPE html><html><head><title>Test Page</title></head><body><h1>Welcome!</h1></body></html>",
    isValid: true,
  },
  {
    htmlstring:
      "<html><head><title>Test</title><body><h1>Hi!</h1></body></html>",
    isValid: false,
  },
  {
    htmlstring:
      "<html><head><title>Example</title></head><body><p>This is a paragraph.</p></body></html>",
    isValid: true,
  },
  {
    htmlstring:
      "<html><body><h1>Hello!</h1><p>Sample text without closing tags for head and html",
    isValid: false,
  },
  {
    htmlstring:
      "<!DOCTYPE html><html><head><title>Valid Page</title></head><body><h1>Hi There</h1><p>Content</p></body></html>",
    isValid: true,
  },
  {
    htmlstring:
      "<!DOCTYPE html><html><head><title>Invalid without closing body</title></head><body><h2>Oops</h2>",
    isValid: false,
  },
  {
    htmlstring:
      "<html><head><meta charset='UTF-8'><title>Valid HTML</title></head><body><div><p>Content inside div</p></div></body></html>",
    isValid: true,
  },
  {
    htmlstring:
      "<html><head><title>Open Tag</head><body><p>Unclosed body</html>",
    isValid: false,
  },
  {
    htmlstring:
      "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Structured</title></head><body><section><article><h1>Title</h1><p>Text</p></article></section></body></html>",
    isValid: true,
  },
  {
    htmlstring: "<html><body><h1>Broken</h1><p>Missing Doctype</body>",
    isValid: false,
  },
];
