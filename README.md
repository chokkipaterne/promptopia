# Promptopia: Discover & Share AI Prompts

## Introduction

**Promptopia** is a community-driven platform dedicated to discovering and sharing unique and effective prompts for AI language models. Our goal is to expand the creative horizons of AI developers, enthusiasts, and researchers by providing a curated list of prompts from the community, for the community.

## Features

- **Discover Prompts**: Browse through a vast collection of prompts catered for various AI applications.
- **Share Your Prompts**: Contribute your unique prompts and get feedback from the community.
- **User-Friendly Interface**: Easily navigate and search for specific prompts based on tags.

## Screenshot

Demo accessible at https://promptopia-drab-alpha.vercel.app/

![HomePage](/screenshots/home.png)
Promptopia HomePage.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/promptopia.git
```

2. Create NEXTAUTH_SECRET using command line on your PC or cryptool.org/en/cto/openssl

```bash
openssl rand -base64 32
```

3. Create file .env and setup the following environmment variables:

```bash
   GOOGLE_ID=
   GOOGLE_CLIENT_SECRET=
   MONGODB_URI=
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=
```

4. Navigate to the project directory and install the required packages:

```bash
cd promptopia
npm init
```

5. Run the application:

```bash
npm run dev
```

## FAQ

**Q**: What types of prompts can be shared?  
**A**: Any prompt designed for AI language models! Whether it's for chatbots, story generators, or code generation, we're interested.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please open an issue on this repository.

---

Feel free to modify this template as needed to suit the specifics of your project!
