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
const htmlExample3 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A sample HTML document for validation testing">
    <title>Test Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h1>Welcome to Our Website</h1>
            <p>This is a sample HTML document designed to test tag validation.</p>
            <img src="banner.jpg" alt="Banner image" />
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>We provide high-quality services to our customers around the world.</p>
            <div class="team">
                <div class="member">
                    <img src="team1.jpg" alt="Team member 1" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
                <div class="member">
                    <img src="team2.jpg" alt="Team member 2" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
            </div>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Solutions</li>
                <li>Consulting</li>
            </ul>
            <hr />
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <form action="/submit" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5"></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
        <a href="#home">Back to top</a>
    </footer>
</body>
</html>`;

const htmlExample4 = `
<!DOCTYPE html>
<html>
    <head>
        <title>Valid HTML</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
`;
const htmlExample12 = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Self-closing Tags</title>
    </head>
    <body>
        <img src="image.jpg" alt="Image description" />
        <hr />
        <br />
    </body>
</html>

`;

const htmlExample5 = `
<!DOCTYPE html>
<html>
    <body>
        <div>
            <header>
                <h1>Page Title</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
            <footer>
                <p>&copy; 2023 Company Name</p>
            </footer>
        </div>
    </body>
</html>
`;
const htmlExample6 = `<!DOCTYPE html>
<html>
    <body>
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Submit</button>
        </form>
    </body>
</html>
`;
const htmlExample7 = `<!DOCTYPE html>
<html>
    <body>
        <section>
            <article>
                <h2>Article Title</h2>
                <p>Content of the article.</p>
            </article>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </section>
    </body>
</html>
`;
const htmlExample8 = `<!DOCTYPE html>
<html>
    <head>
        <title>Invalid HTML</title>
    </head>
    <body>
        <h1>Oops</h1>
        <p>Missing closing tag for body.
    </html>
`;
const htmlExample9 = `<!DOCTYPE html>
<html>
    <body>
        <div>
            <h1>Mismatched tags</h1>
        </span>
    </body>
</html>
`;
const htmlExample10 = `<!DOCTYPE html>
<html>
    <body>
        <p>Extra closing tag</p>
        </p>
    </body>
</html>
`;
const htmlExample11 = `<!DOCTYPE html>
<html>
    <body>
        <section>
            <h2>Unclosed section</h2>
            <p>This section tag is never closed.
        </div>
    </body>
</html>
`;
const htmlExamples = [
  {
    html: htmlExample,
    isValid: true,
  },
  {
    html: htmlExample2,
    isValid: true,
  },
  {
    html: htmlExample3,
    isValid: true,
  },
  {
    html: htmlExample4,
    isValid: true,
  },
  {
    html: htmlExample5,
    isValid: true,
  },
  {
    html: htmlExample6,
    isValid: true,
  },
  {
    html: htmlExample7,
    isValid: true,
  },
  {
    html: htmlExample8,
    isValid: false,
  },
  {
    html: htmlExample9,
    isValid: false,
  },
  {
    html: htmlExample10,
    isValid: false,
  },
  {
    html: htmlExample11,
    isValid: false,
  },
  {
    html: htmlExample12,
    isValid: true,
  },
];
