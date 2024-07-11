export default [
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche.",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/5836/5836037.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Caption Generator",
    desc: "Create captivating captions for social media posts to enhance engagement and interaction.",
    category: "Social Media Management",
    icon: "https://cdn-icons-png.flaticon.com/128/5853/5853758.png",
    slug: "social-media-caption-generator",
    aiPrompt: "Generate engaging captions for social media posts.",
    form: [
      {
        label: "Enter your social media post content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },

  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/15047/15047677.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/11513/11513415.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/8359/8359651.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: " Hashtag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "hashtag-generator",
    aiPrompt:
      "Generate 15 hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },

  {
    name: "AI Email Generator",
    desc: "An AI tool that generates email content ideas, subject lines, and templates based on user input, enhancing email marketing and communication efforts.",
    icon: "https://cdn-icons-png.flaticon.com/128/15047/15047587.png",
    category: "email",
    slug: "ai-email-generator",
    aiPrompt:
      "Generate email content ideas, subject lines, or email templates based on your input, tailored for various purposes like marketing campaigns or personal communication.",
    form: [
      {
        label: "Enter your email content or outline",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
    ],
  },

  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/1791/1791391.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },

  {
    name: "Recipe Generator by Ingredients",
    desc: "An AI tool that generates delicious recipes based on the ingredients you have, making meal planning easy.",
    icon: "https://cdn-icons-png.flaticon.com/128/9757/9757044.png",
    category: "Recipe Tools",
    slug: "recipe-generator",
    aiPrompt:
      "Generate a recipe based on the given ingredients in rich text editor format",
    form: [
      {
        label: "Enter Ingredients",
        field: "textarea",
        name: "ingredients",
        required: true,
      },
    ],
  },

  {
    name: "Music Recommendation",
    desc: "An AI tool that recommends background music for Instagram posts, stories, or YouTube videos based on your content's mood and style.",
    icon: "https://cdn-icons-png.flaticon.com/128/10832/10832794.png",
    category: "music",
    slug: "music-recommendation-social-media",
    aiPrompt:
      "Recommend background music for your Instagram posts, stories, or YouTube videos based on the mood and style of your content.",
    form: [
      {
        label: "Describe the mood or style of your content",
        field: "textarea",
        name: "contentStyle",
        required: true,
      },
    ],
  },
  {
    name: "Movie Recommendation",
    desc: "An AI tool that provides personalized movie recommendations based on your preferences.",
    icon: "https://cdn-icons-png.flaticon.com/128/4221/4221419.png",
    category: "Entertainment",
    slug: "movie-recommendation",
    aiPrompt:
      "Provide a list of 5 movie recommendations based on the given genre and preferences in rich text editor format",
    form: [
      {
        label: "Enter Genre",
        field: "input",
        name: "genre",
        required: true,
      },
      {
        label:
          "Enter Your Preferences (e.g., favorite actors, directors, themes)",
        field: "textarea",
        name: "preferences",
      },
    ],
  },
  {
    name: "Quote Generator",
    desc: "Generate inspirational or themed quotes for social media and content creation purposes.",
    category: "Content Creation",
    icon: "https://cdn-icons-png.flaticon.com/128/16972/16972319.png",
    slug: "quote-generator",
    aiPrompt: "Generate quotes based on a theme or keywords.",
    form: [
      {
        label: "Enter quote theme or keywords",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool for generating blog content effortlessly and quicklyAn AI tool for generating blog content effortlessly and quickly, saving you time and effort..",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt:
      "Generate blog content based on given topic and outline in Rich text editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/8980/8980709.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/8089/8089901.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "AI Model to Correct your English grammar by providing the text, ensuring clarity and accuracy.",
    icon: "https://cdn-icons-png.flaticon.com/128/2463/2463149.png",
    category: "english",

    slug: "english-grammar-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammar and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language, quickly and accurately, saving you time.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language, providing detailed explanations and insights.",
    icon: "https://cdn-icons-png.flaticon.com/128/2232/2232761.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/921/921564.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },

  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679821.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];